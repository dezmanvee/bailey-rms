import { Grade } from '@prisma/client';

// Grade scale configuration
export const GRADE_SCALE = [
  { grade: Grade.A, min: 70, max: 100, remark: 'EXCELLENT' },
  { grade: Grade.B, min: 60, max: 69.99, remark: 'VERY GOOD' },
  { grade: Grade.C, min: 50, max: 59.99, remark: 'GOOD' },
  { grade: Grade.D, min: 45, max: 49.99, remark: 'PASS' },
  { grade: Grade.E, min: 40, max: 44.99, remark: 'WEAK' },
  { grade: Grade.F, min: 0, max: 39.99, remark: 'FAIL' },
] as const;

// Score limits
export const CA_MAX_SCORE = 40;
export const EXAM_MAX_SCORE = 60;
export const TOTAL_MAX_SCORE = 100;
export const PASS_MARK = 50;

/**
 * Calculate grade based on total score
 */
export function calculateGrade(totalScore: number): {
  grade: Grade;
  remark: string;
} {
  const gradeInfo = GRADE_SCALE.find(
    (g) => totalScore >= g.min && totalScore <= g.max
  );

  return {
    grade: gradeInfo?.grade ?? Grade.F,
    remark: gradeInfo?.remark ?? 'FAIL',
  };
}

/**
 * Calculate total score from CA and Exam
 */
export function calculateTotalScore(caScore: number, examScore: number): number {
  return Number((caScore + examScore).toFixed(2));
}

/**
 * Validate CA score
 */
export function validateCAScore(score: number): boolean {
  return score >= 0 && score <= CA_MAX_SCORE;
}

/**
 * Validate Exam score
 */
export function validateExamScore(score: number): boolean {
  return score >= 0 && score <= EXAM_MAX_SCORE;
}

/**
 * Calculate average score from multiple subjects
 */
export function calculateAverageScore(scores: number[]): number {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return Number((sum / scores.length).toFixed(2));
}

/**
 * Calculate class position
 */
export function calculatePosition(
  studentAverage: number,
  allAverages: number[]
): number {
  const sortedAverages = [...allAverages].sort((a, b) => b - a);
  return sortedAverages.indexOf(studentAverage) + 1;
}

/**
 * Generate teacher comment based on performance
 */
export function generateTeacherComment(averageScore: number): string {
  if (averageScore >= 70) {
    return 'Excellent performance! Keep up the outstanding work.';
  } else if (averageScore >= 60) {
    return 'Very good performance. With more effort, you can achieve excellence.';
  } else if (averageScore >= 50) {
    return 'Good performance. Continue to work hard and improve.';
  } else if (averageScore >= 40) {
    return 'Fair performance. More dedication is needed to improve results.';
  } else {
    return 'Poor performance. Please seek extra help and work harder.';
  }
}

/**
 * Determine if student passed
 */
export function hasPassed(totalScore: number): boolean {
  return totalScore >= PASS_MARK;
}

/**
 * Calculate subject statistics for a class
 */
export function calculateSubjectStats(scores: number[]): {
  highest: number;
  lowest: number;
  average: number;
} {
  if (scores.length === 0) {
    return { highest: 0, lowest: 0, average: 0 };
  }

  return {
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    average: calculateAverageScore(scores),
  };
}