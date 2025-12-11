import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.auditLog.create({
        data: {
          action: "CREATE_POST",
          entity: "Post",
          changes: { name: input.name },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const log = await ctx.db.auditLog.findFirst({
      orderBy: { createdAt: "desc" },
      where: { action: "CREATE_POST" },
    });

    return log ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
