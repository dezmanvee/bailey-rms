// ============================================
// Authentication Router
// ============================================

import { TRPCError } from '@trpc/server';
import { hash } from 'bcryptjs';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure, adminProcedure } from '../trpc';
import { registerSchema } from '~/lib/utils/validation';
import { auth } from '~/server/better-auth';

export const authRouter = createTRPCRouter({
  /**
   * Get current session
   */
  getSession: publicProcedure.query(async ({ ctx }) => {
    return ctx.session;
  }),

  /**
   * Get current user
   */
  getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { email: ctx.session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        image: true,
        phoneNumber: true,
        isActive: true,
        classrooms: {
          where: { isActive: true },
          include: {
            _count: {
              select: { students: true },
            },
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
    }

    return user;
  }),

  /**
   * Register new user (admin only in production)
   */
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      // Check if user already exists
      const existingUser = await ctx.db.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'User with this email already exists',
        });
      }

      // Hash password
      const passwordHash = await hash(input.password, 10);

      // Create user
      const user = await ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: passwordHash,
          role: input.role,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        },
      });

      return user;
    }),

  listTeachers: adminProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany({
      where: { role: 'TEACHER', isActive: true },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        image: true,
        phoneNumber: true,
        classrooms: {
          where: { isActive: true },
          select: {
            id: true,
            name: true,
            section: true,
            session: true,
          },
        },
      },
      orderBy: [{ name: 'asc' }],
    });
    return users;
  }),

  /**
   * Admin: create teacher user
   */
  createTeacher: adminProcedure
    .input(
      registerSchema.transform((v) => ({ ...v, role: 'TEACHER' as const })),
    )
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.db.user.findUnique({
        where: { email: input.email },
      });
      if (existingUser) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'User with this email already exists',
        });
      }

      const passwordHash = await hash(input.password, 10);
      const user = await ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: passwordHash,
          role: 'TEACHER',
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        },
      });
 
      await auth.api.signUpEmail({
        body: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
      return user;
    }),
  updateTeacher: adminProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
        name: z.string().min(2).optional(),
        email: z.string().email().optional(),
        phoneNumber: z.string().optional(),
        image: z.string().url().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const user = await ctx.db.user.findUnique({
        where: { id },
        select: { role: true },
      });
      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
      }
      if (user.role !== 'TEACHER') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Not a teacher' });
      }
      const updated = await ctx.db.user.update({
        where: { id },
        data,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          image: true,
          phoneNumber: true,
        },
      });
      return updated;
    }),
  /**
   * Admin: delete (deactivate) teacher
   */
  deleteTeacher: adminProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: input.id },
        select: { id: true, email: true, role: true, isActive: true },
      });
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      if (user.role !== 'TEACHER') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only teachers can be deleted with this operation',
        });
      }
      const updated = await ctx.db.user.update({
        where: { id: input.id },
        data: { isActive: false },
        select: { id: true },
      });
      const authUser = await ctx.db.authUser.findUnique({
        where: { email: user.email },
        select: { id: true },
      });
      if (authUser?.id) {
        await ctx.db.authUser.delete({
          where: { id: authUser.id },
        });
      }
      return updated;
    }),
});
