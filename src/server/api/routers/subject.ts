import { createTRPCRouter, protectedProcedure } from '../trpc';

export const subjectRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const subjects = await ctx.db.subject.findMany({
      where: { isActive: true },
      orderBy: [{ name: 'asc' }],
    });
    return subjects;
  }),
});

