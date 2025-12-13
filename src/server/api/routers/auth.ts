// ============================================
// Authentication Router
// ============================================

import { TRPCError } from '@trpc/server';
import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure, adminProcedure } from '../trpc';
import { loginSchema, registerSchema } from '~/lib/utils/validation';
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

  /**
   * Admin: create teacher user
   */
  createTeacher: adminProcedure
    .input(
      registerSchema.transform((v) => ({ ...v, role: 'TEACHER' as const })),
    )
    .mutation(async ({ ctx, input }) => {
      const now = new Date();
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
