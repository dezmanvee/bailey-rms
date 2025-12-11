// ============================================
// Result Management Router
// ============================================

import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import {
  createTRPCRouter,
  protectedProcedure,
  teacherProcedure,
  adminProcedure,
} from '../trpc';
import {
  createResultSchema,
  updateResultSchema,
  searchResultsSchema,
} from '~/lib/utils/validation';
import {
  calculateGrade,
  calculateTotalScore,
  calculateAverageScore,
  calculatePosition,
} from '~/lib/utils/grading';

export const resultRouter = createTRPCRouter({
  /**
   * Get all results (with filters)
   */
  list: teacherProcedure
    .input(searchResultsSchema.optional())
    .query(async ({ ctx, input }) => {
      const where: any = {
        ...(input?.classroomId && {
          student: { classroomId: input.classroomId },
        }),
        ...(input?.term && { term: input.term }),
        ...(input?.session && { session: input.session }),
        ...(input?.isPublished !== undefined && {
          isPublished: input.isPublished,
        }),
      };

      const results = await ctx.db.result.findMany({
        where,
        include: {
          student: {
            include: {
              classroom: {
                select: {
                  id: true,
                  name: true,
                  section: true,
                },
              },
            },
          },
          subjects: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      return results;
    }),

  /**
   * Get result by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      const result = await ctx.db.result.findUnique({
        where: { id: input.id },
        include: {
          student: {
            include: {
              classroom: {
                include: {
                  teacher: {
                    select: {
                      id: true,
                      name: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
          subjects: {
            orderBy: { subject: 'asc' },
          },
        },
      });

      if (!result) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Result not found',
        });
      }

      return result;
    }),

  /**
   * Get student's result for specific term
   */
  getByStudentAndTerm: protectedProcedure
    .input(
      z.object({
        studentId: z.number().int().positive(),
        term: z.enum(['FIRST', 'SECOND', 'THIRD']),
        session: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const result = await ctx.db.result.findUnique({
        where: {
          studentId_term_session: {
            studentId: input.studentId,
            term: input.term,
            session: input.session,
          },
        },
        include: {
          student: {
            include: {
              classroom: true,
            },
          },
          subjects: {
            orderBy: { subject: 'asc' },
          },
        },
      });

      return result;
    }),

  /**
   * Create new result
   */
  create: teacherProcedure
    .input(createResultSchema)
    .mutation(async ({ ctx, input }) => {
      const appUser = await ctx.db.user.findUnique({
        where: { email: ctx.session.user.email },
        select: { id: true },
      });
      // Check if result already exists
      const existing = await ctx.db.result.findUnique({
        where: {
          studentId_term_session: {
            studentId: input.studentId,
            term: input.term,
            session: input.session,
          },
        },
      });

      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Result for this student, term, and session already exists',
        });
      }

      // Calculate grades and totals for each subject
      const subjectsWithGrades = input.subjects.map((subject) => {
        const totalScore = calculateTotalScore(
          subject.caScore,
          subject.examScore
        );
        const { grade, remark } = calculateGrade(totalScore);

        return {
          subject: subject.subject,
          caScore: subject.caScore,
          examScore: subject.examScore,
          totalScore,
          grade,
          remark,
        };
      });

      // Calculate overall statistics
      const allTotals = subjectsWithGrades.map((s) => s.totalScore);
      const totalScore = allTotals.reduce((sum: number, score: number) => sum + score, 0);
      const averageScore = calculateAverageScore(allTotals);

      // Get all students in the same classroom for position calculation
      const student = await ctx.db.student.findUnique({
        where: { id: input.studentId },
        select: { classroomId: true },
      });

      if (!student) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Student not found',
        });
      }

      // Create the result with subjects
      const result = await ctx.db.result.create({
        data: {
          studentId: input.studentId,
          term: input.term,
          session: input.session,
          timesSchoolOpened: input.timesSchoolOpened,
          timesPresent: input.timesPresent,
          timesAbsent: input.timesAbsent,
          teacherComment: input.teacherComment,
          principalComment: input.principalComment,
          psychomotorRatings: input.psychomotorRatings,
          affectiveDomain: input.affectiveDomain,
          totalScore,
          averageScore,
          createdBy: appUser?.id ?? null,
          subjects: {
            create: subjectsWithGrades,
          },
        },
        include: {
          student: true,
          subjects: true,
        },
      });

      // Calculate and update position
      await updateClassPositions(ctx, student.classroomId, input.term, input.session);

      return result;
    }),

  /**
   * Update existing result
   */
  update: teacherProcedure
    .input(updateResultSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, subjects, ...data } = input;

      // Get existing result
      const existing = await ctx.db.result.findUnique({
        where: { id },
        include: { student: true },
      });

      if (!existing) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Result not found',
        });
      }

      // If subjects are being updated, recalculate grades
      let updateData: any = { ...data };

      if (subjects && subjects.length > 0) {
        const subjectsWithGrades = subjects.map((subject) => {
          const totalScore = calculateTotalScore(
            subject.caScore,
            subject.examScore
          );
          const { grade, remark } = calculateGrade(totalScore);

          return {
            subject: subject.subject,
            caScore: subject.caScore,
            examScore: subject.examScore,
            totalScore,
            grade,
            remark,
          };
        });

        const allTotals = subjectsWithGrades.map((s) => s.totalScore);
        const totalScore = allTotals.reduce((sum: number, score: number) => sum + score, 0);
        const averageScore = calculateAverageScore(allTotals);

        updateData.totalScore = totalScore;
        updateData.averageScore = averageScore;

        // Delete existing subject scores and create new ones
        await ctx.db.subjectScore.deleteMany({
          where: { resultId: id },
        });

        updateData.subjects = {
          create: subjectsWithGrades,
        };
      }

      const result = await ctx.db.result.update({
        where: { id },
        data: updateData,
        include: {
          student: true,
          subjects: true,
        },
      });

      // Recalculate positions if scores changed
      if (subjects) {
        await updateClassPositions(
          ctx,
          existing.student.classroomId,
          existing.term,
          existing.session
        );
      }

      return result;
    }),

  /**
   * Publish result (make visible to students/parents)
   */
  publish: teacherProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.result.update({
        where: { id: input.id },
        data: {
          isPublished: true,
          publishedAt: new Date(),
        },
      });

      return result;
    }),

  /**
   * Unpublish result
   */
  unpublish: teacherProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.result.update({
        where: { id: input.id },
        data: {
          isPublished: false,
          publishedAt: null,
        },
      });

      return result;
    }),

  /**
   * Delete result
   */
  delete: adminProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.result.delete({
        where: { id: input.id },
      });

      return result;
    }),

  /**
   * Get class performance analytics
   */
  getClassAnalytics: teacherProcedure
    .input(
      z.object({
        classroomId: z.number().int().positive(),
        term: z.enum(['FIRST', 'SECOND', 'THIRD']),
        session: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const results = await ctx.db.result.findMany({
        where: {
          student: { classroomId: input.classroomId },
          term: input.term,
          session: input.session,
          isPublished: true,
        },
        include: {
          subjects: true,
          student: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              admissionNo: true,
            },
          },
        },
      });

      // Calculate analytics
      const totalStudents = results.length;
      const averageScores = results.map((r) => r.averageScore);
      const classAverage = calculateAverageScore(averageScores);

      // Grade distribution
      const gradeDistribution = results.reduce((acc, result) => {
        const { grade } = calculateGrade(result.averageScore);
        acc[grade] = (acc[grade] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Top performers
      const topPerformers = results
        .sort((a, b) => b.averageScore - a.averageScore)
        .slice(0, 5)
        .map((r) => ({
          student: r.student,
          averageScore: r.averageScore,
          position: r.classPosition,
        }));

      // Subject analysis
      const subjectAnalysis = await getSubjectAnalysis(ctx, results);

      return {
        totalStudents,
        classAverage,
        gradeDistribution,
        topPerformers,
        subjectAnalysis,
      };
    }),
});

/**
 * Helper function to update class positions
 */
async function updateClassPositions(
  ctx: any,
  classroomId: number,
  term: string,
  session: string
) {
  const results = await ctx.db.result.findMany({
    where: {
      student: { classroomId },
      term,
      session,
    },
    select: {
      id: true,
      averageScore: true,
    },
  });

  const allAverages = results.map((r: { averageScore: number }) => r.averageScore);
  const totalStudents = results.length;

  for (const result of results) {
    const position = calculatePosition(result.averageScore, allAverages);

    await ctx.db.result.update({
      where: { id: result.id },
      data: {
        classPosition: position,
        totalStudents,
      },
    });
  }
}

/**
 * Helper function to get subject analysis
 */
async function getSubjectAnalysis(ctx: any, results: any[]) {
  const subjectMap = new Map<string, number[]>();

  results.forEach((result) => {
    result.subjects.forEach((subject: any) => {
      if (!subjectMap.has(subject.subject)) {
        subjectMap.set(subject.subject, []);
      }
      subjectMap.get(subject.subject)!.push(subject.totalScore);
    });
  });

  return Array.from(subjectMap.entries()).map(([subject, scores]) => ({
    subject,
    average: calculateAverageScore(scores),
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    passRate: (scores.filter((s) => s >= 50).length / scores.length) * 100,
  }));
}
