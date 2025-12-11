// ============================================
// Authentication Router
// ============================================

import { TRPCError } from '@trpc/server';
import { hash } from 'bcryptjs';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';
import { loginSchema, registerSchema } from '~/lib/utils/validation';

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
});
