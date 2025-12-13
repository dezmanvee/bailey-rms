import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import {
  createTRPCRouter,
  protectedProcedure,
  teacherProcedure,
  adminProcedure,
} from '../trpc';
import {
  createStudentSchema,
  updateStudentSchema,
  searchStudentsSchema,
} from '~/lib/utils/validation';
import type { Prisma } from '../../../../generated/prisma';

export const studentRouter = createTRPCRouter({
  /**
   * Get all students (with optional filters)
   */
  list: teacherProcedure
    .input(searchStudentsSchema.optional())
    .query(async ({ ctx, input }) => {
      const where: Prisma.StudentWhereInput = {
        ...(input?.classroomId && { classroomId: input.classroomId }),
        ...(input?.gender && { gender: input.gender }),
        ...(input?.isActive !== undefined && { isActive: input.isActive }),
      };

      // Search by name or admission number
      if (input?.query) {
        where.OR = [
          { firstName: { contains: input.query, mode: 'insensitive' } },
          { lastName: { contains: input.query, mode: 'insensitive' } },
          { otherNames: { contains: input.query, mode: 'insensitive' } },
          { admissionNo: { contains: input.query, mode: 'insensitive' } },
        ] as Prisma.StudentWhereInput['OR'];
      }

      const students = await ctx.db.student.findMany({
        where,
        include: {
          classroom: {
            select: {
              id: true,
              name: true,
              section: true,
              session: true,
            },
          },
          _count: {
            select: { results: true },
          },
        },
        orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
      });

      return students;
    }),

  /**
   * Get students by classroom
   */
  getByClassroom: teacherProcedure
    .input(z.object({ classroomId: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      const students = await ctx.db.student.findMany({
        where: {
          classroomId: input.classroomId,
          isActive: true,
        },
        include: {
          results: {
            where: { isPublished: true },
            select: {
              id: true,
              term: true,
              session: true,
              averageScore: true,
              classPosition: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
        orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
      });

      return students;
    }),

  /**
   * Get single student by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: { id: input.id },
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
          subjects: {
            include: { subject: true },
          },
          results: {
            include: {
              subjects: true,
            },
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!student) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Student not found',
        });
      }

      return student;
    }),

  /**
   * Create new student
   */
  create: adminProcedure
    .input(createStudentSchema)
    .mutation(async ({ ctx, input }) => {
      // Check if admission number already exists
      const existing = await ctx.db.student.findUnique({
        where: { admissionNo: input.admissionNo },
      });

      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'A student with this admission number already exists',
        });
      }

      const student = await ctx.db.student.create({
        data: {
          admissionNo: input.admissionNo,
          firstName: input.firstName,
          lastName: input.lastName,
          otherNames: input.otherNames ?? null,
          gender: input.gender,
          dateOfBirth: input.dateOfBirth ?? null,
          classroomId: input.classroomId,
          guardianName: input.guardianName ?? null,
          guardianPhone: input.guardianPhone ?? null,
          address: input.address ?? null,
          image: input.image ?? null,
          subjects: input.subjectIds && input.subjectIds.length > 0 ? {
            create: input.subjectIds.map((subjectId) => ({ subjectId })),
          } : undefined,
        },
        include: {
          classroom: true,
          subjects: { include: { subject: true } },
        },
      });

      return student;
    }),

  /**
   * Update student
   */
  update: adminProcedure
    .input(updateStudentSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      // Check if admission number is being changed and if it's unique
      if (data.admissionNo) {
        const existing = await ctx.db.student.findFirst({
          where: {
            admissionNo: data.admissionNo,
            NOT: { id },
          },
        });

        if (existing) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'A student with this admission number already exists',
          });
        }
      }

      const student = await ctx.db.student.update({
        where: { id },
        data,
        include: {
          classroom: true,
        },
      });

      return student;
    }),

  /**
   * Delete (deactivate) student
   */
  delete: adminProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      // Soft delete by setting isActive to false
      const student = await ctx.db.student.update({
        where: { id: input.id },
        data: { isActive: false },
      });

      return student;
    }),

  /**
   * Bulk import students
   */
  bulkImport: adminProcedure
    .input(z.object({ students: z.array(createStudentSchema) }))
    .mutation(async ({ ctx, input }) => {
      const results = {
        success: 0,
        failed: 0,
        errors: [] as string[],
      };

      for (const studentData of input.students) {
        try {
          // Check if admission number already exists
          const existing = await ctx.db.student.findUnique({
            where: { admissionNo: studentData.admissionNo },
          });

          if (existing) {
            results.failed++;
            results.errors.push(
              `Student ${studentData.admissionNo} already exists`
            );
            continue;
          }

          await ctx.db.student.create({
            data: studentData,
          });

          results.success++;
        } catch (error) {
          results.failed++;
          results.errors.push(
            `Failed to import ${studentData.admissionNo}: ${
              error instanceof Error ? error.message : String(error)
            }`
          );
        }
      }

      return results;
    }),
});
