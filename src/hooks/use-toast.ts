import { toast as sonnerToast } from 'sonner';

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
}

export function useToast() {
  const toast = ({ title, description, variant = 'default' }: ToastOptions) => {
    const message = description || title || '';
    const heading = title && description ? title : undefined;

    if (variant === 'destructive') {
      sonnerToast.error(heading || message, {
        description: heading ? message : undefined,
      });
    } else if (variant === 'success') {
      sonnerToast.success(heading || message, {
        description: heading ? message : undefined,
      });
    } else {
      sonnerToast(heading || message, {
        description: heading ? message : undefined,
      });
    }
  };

  return { toast };
}

// For direct usage without hook
export const toast = ({
  title,
  description,
  variant = 'default',
}: ToastOptions) => {
  const message = description || title || '';
  const heading = title && description ? title : undefined;

  if (variant === 'destructive') {
    sonnerToast.error(heading || message, {
      description: heading ? message : undefined,
    });
  } else if (variant === 'success') {
    sonnerToast.success(heading || message, {
      description: heading ? message : undefined,
    });
  } else {
    sonnerToast(heading || message, {
      description: heading ? message : undefined,
    });
  }
};