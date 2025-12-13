// ============================================
// Zod Validation Schemas
// ============================================

import { z } from 'zod';
import { Gender, Term, Role } from '../../../generated/prisma/enums';
import { CA_MAX_SCORE, EXAM_MAX_SCORE } from './grading';

// ============================================
// AUTH SCHEMAS
// ============================================

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.nativeEnum(Role),
});

// ============================================
// STUDENT SCHEMAS
// ============================================

export const createStudentSchema = z.object({
  admissionNo: z.string().min(1, 'Admission number is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  otherNames: z.string().optional(),
  gender: z.nativeEnum(Gender),
  dateOfBirth: z.date().optional(),
  classroomId: z.number().int().positive(),
  subjectIds: z.array(z.number().int().positive()).optional(),
  guardianName: z.string().optional(),
  guardianPhone: z.string().optional(),
  address: z.string().optional(),
  image: z.string().url().optional(),
});

export const updateStudentSchema = createStudentSchema.partial().extend({
  id: z.number().int().positive(),
});

// ============================================
// CLASSROOM SCHEMAS
// ============================================

export const createClassroomSchema = z.object({
  name: z.string().min(1, 'Classroom name is required'),
  section: z.string().optional(),
  session: z.string().min(1, 'Session is required'),
  currentTerm: z.nativeEnum(Term),
  teacherId: z.number().int().positive(),
});

// ============================================
// RESULT SCHEMAS
// ============================================

export const subjectScoreSchema = z.object({
  subject: z.string().min(1, 'Subject name is required'),
  caScore: z
    .number()
    .min(0, 'CA score cannot be negative')
    .max(CA_MAX_SCORE, `CA score cannot exceed ${CA_MAX_SCORE}`),
  examScore: z
    .number()
    .min(0, 'Exam score cannot be negative')
    .max(EXAM_MAX_SCORE, `Exam score cannot exceed ${EXAM_MAX_SCORE}`),
});

export const createResultSchema = z.object({
  studentId: z.number().int().positive(),
  term: z.nativeEnum(Term),
  session: z.string().min(1, 'Session is required'),
  timesSchoolOpened: z.number().int().min(0),
  timesPresent: z.number().int().min(0),
  timesAbsent: z.number().int().min(0),
  subjects: z.array(subjectScoreSchema).min(1, 'At least one subject required'),
  teacherComment: z.string().optional(),
  principalComment: z.string().optional(),
  psychomotorRatings: z
    .record(z.string(), z.number().int().min(1).max(5))
    .optional(),
  affectiveDomain: z.record(z.string(), z.string()).optional(),
});

export const updateResultSchema = createResultSchema.partial().extend({
  id: z.number().int().positive(),
});

// ============================================
// SEARCH & FILTER SCHEMAS
// ============================================

export const searchStudentsSchema = z.object({
  classroomId: z.number().int().positive().optional(),
  query: z.string().optional(),
  gender: z.nativeEnum(Gender).optional(),
  isActive: z.boolean().optional(),
});

export const searchResultsSchema = z.object({
  classroomId: z.number().int().positive().optional(),
  term: z.nativeEnum(Term).optional(),
  session: z.string().optional(),
  isPublished: z.boolean().optional(),
});

// ============================================
// TYPE EXPORTS
// ============================================

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type CreateStudentInput = z.infer<typeof createStudentSchema>;
export type UpdateStudentInput = z.infer<typeof updateStudentSchema>;
export type CreateClassroomInput = z.infer<typeof createClassroomSchema>;
export type SubjectScoreInput = z.infer<typeof subjectScoreSchema>;
export type CreateResultInput = z.infer<typeof createResultSchema>;
export type UpdateResultInput = z.infer<typeof updateResultSchema>;
export type SearchStudentsInput = z.infer<typeof searchStudentsSchema>;
export type SearchResultsInput = z.infer<typeof searchResultsSchema>;
