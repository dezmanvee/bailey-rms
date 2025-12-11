import { createAuthClient } from "better-auth/react";

const runtimeBaseURL =
  (typeof window !== "undefined" && window.location.origin) ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${process.env.PORT ?? 3000}`;

export const authClient = createAuthClient({
  baseURL: runtimeBaseURL,
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;
export type Session = typeof authClient.$Infer.Session;
