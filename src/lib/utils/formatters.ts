/**
 * Format student name
 */
export function formatStudentName(
  firstName: string,
  lastName: string,
  otherNames?: string | null
): string {
  const parts = [firstName, lastName];
  if (otherNames) parts.push(otherNames);
  return parts.join(' ');
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/**
 * Format score with 2 decimal places
 */
export function formatScore(score: number): string {
  return score.toFixed(2);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

/**
 * Get ordinal suffix for position
 */
export function getOrdinalSuffix(position: number): string {
  const j = position % 10;
  const k = position % 100;
  
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}

/**
 * Format position (e.g., "1st", "2nd", "3rd")
 */
export function formatPosition(position: number): string {
  return `${position}${getOrdinalSuffix(position)}`;
}

/**
 * Format session (e.g., "2024/2025")
 */
export function formatSession(session: string): string {
  return session;
}

/**
 * Get current academic session
 */
export function getCurrentSession(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  
  // Academic year starts in September (month 8)
  if (month >= 8) {
    return `${year}/${year + 1}`;
  } else {
    return `${year - 1}/${year}`;
  }
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
