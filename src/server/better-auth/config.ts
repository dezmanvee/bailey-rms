import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "~/env";
import { db } from "~/server/db";

const appBaseURL =
  (typeof process.env.NEXT_PUBLIC_APP_URL === "string"
    ? process.env.NEXT_PUBLIC_APP_URL
    : undefined) ??
  (typeof process.env.BETTER_AUTH_URL === "string"
    ? process.env.BETTER_AUTH_URL
    : undefined);

const trustedOrigins = [
  "http://localhost:3000",
  "https://rmshamptonpreparatoryschool.vercel.app",
  appBaseURL,
].filter(Boolean) as string[];

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins,
  user: { modelName: "AuthUser" },
  account: { modelName: "AuthAccount" },
  verification: { modelName: "AuthVerification" },
  session: {
    modelName: "AuthSession",
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  // advanced: {
  //   generateId: false, // We use auto-increment IDs
  // },
  secret: env.BETTER_AUTH_SECRET!,
  ...(appBaseURL ? { baseURL: appBaseURL } : {}),
  // socialProviders: {
  //   github: {
  //     clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
  //     clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
  //     redirectURI: "http://localhost:3000/api/auth/callback/github",
  //   },
  // },
});

export type Session = typeof auth.$Infer.Session;
