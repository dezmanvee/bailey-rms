import { authRouter } from "~/server/api/routers/auth";
import { studentRouter } from "~/server/api/routers/student";
import { resultRouter } from "~/server/api/routers/result";
import { classroomRouter } from "~/server/api/routers/classroom";
import { subjectRouter } from "~/server/api/routers/subject";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  student: studentRouter,
  result: resultRouter,
  classroom: classroomRouter,
  subject: subjectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
