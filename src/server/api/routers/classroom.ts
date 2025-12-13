import { z } from 'zod';
import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
} from '../trpc';
import { createClassroomSchema } from '~/lib/utils/validation';
import type { Prisma } from '../../../../generated/prisma';

export const classroomRouter = createTRPCRouter({
  /**
   * List classrooms. Admins see all, teachers see only theirs.
   */
  list: protectedProcedure.query(async ({ ctx }) => {
    const appUser = await ctx.db.user.findUnique({
      where: { email: ctx.session.user.email },
      select: { id: true, role: true },
    });

    const where: Prisma.ClassroomWhereInput =
      appUser?.role === 'ADMIN' ? {} : { teacherId: appUser?.id };

    const classrooms = await ctx.db.classroom.findMany({
      where,
      include: {
        _count: { select: { students: true } },
        teacher: { select: { id: true, name: true, email: true } },
      },
      orderBy: [{ session: 'desc' }, { name: 'asc' }, { section: 'asc' }],
    });

    return classrooms;
  }),

  /**
   * Get classroom by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      const classroom = await ctx.db.classroom.findUnique({
        where: { id: input.id },
        include: {
          teacher: { select: { id: true, name: true, email: true } },
          students: true,
        },
      });
      return classroom;
    }),

  /**
   * Create a classroom and assign a teacher
   */
  create: adminProcedure
    .input(createClassroomSchema)
    .mutation(async ({ ctx, input }) => {
      const classroom = await ctx.db.classroom.create({
        data: {
          name: input.name,
          section: input.section ?? null,
          session: input.session,
          currentTerm: input.currentTerm,
          teacherId: input.teacherId,
        },
      });
      return classroom;
    }),

  /**
   * Assign/reassign a teacher to a classroom
   */
  assignTeacher: adminProcedure
    .input(
      z.object({
        classroomId: z.number().int().positive(),
        teacherId: z.number().int().positive(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const classroom = await ctx.db.classroom.update({
        where: { id: input.classroomId },
        data: { teacherId: input.teacherId },
      });
      return classroom;
    }),
});

