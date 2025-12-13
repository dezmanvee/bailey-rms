
export const APP_NAME = "Bailey's Bowen College RMS";
export const APP_DESCRIPTION = 'Result Management System';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: {
    TEACHER: '/teacher',
    ADMIN: '/admin',
  },
  CLASSROOM: '/teacher/classroom',
  RESULT: {
    ENTRY: '/teacher/result',
    VIEW: '/teacher/result/view',
  },
} as const;

export const SESSION_COOKIE_NAME = 'better-auth.session_token';

// Academic Terms
export const TERMS = [
  { value: 'FIRST', label: 'First Term' },
  { value: 'SECOND', label: 'Second Term' },
  { value: 'THIRD', label: 'Third Term' },
] as const;

// Default session
export const CURRENT_SESSION = '2024/2025';