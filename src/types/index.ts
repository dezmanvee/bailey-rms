import { type User, type Role, type Gender, type Term, type Grade } from "@prisma/client";

export type { User, Role, Gender, Term, Grade };

export interface SessionUser {
  id: number;
  email: string;
  name: string;
  role: Role;
  image?: string | null;
}

export interface DashboardStats {
  totalStudents: number;
  resultsEntered: number;
  resultsPending: number;
  completionRate: number;
}

export interface SubjectPerformance {
  subject: string;
  average: number;
  highest: number;
  lowest: number;
  passRate: number;
}