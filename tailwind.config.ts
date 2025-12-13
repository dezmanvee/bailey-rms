// ============================================
// Tailwind Configuration with Oxblood Theme
// ============================================

import type { Config } from 'tailwindcss';

const config: Config = {
//   darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Oxblood Primary Colors
        oxblood: {
          50: '#FFF1F2',
          100: '#FFE1E4',
          200: '#FFC7CD',
          300: '#FFA0AA',
          400: '#FF6B7D',
          500: '#F83F56',
          600: '#E51D3A',
          700: '#C11428',
          800: '#A01326',
          900: '#800020', // Primary Oxblood
          950: '#5C0015', // Dark Oxblood
        },
        
        // Theme Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        primary: {
          DEFAULT: '#800020', // Oxblood
          foreground: '#FFFFFF',
          light: '#A6002B',
          dark: '#5C0015',
        },
        
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        
        success: {
          DEFAULT: '#16A34A',
          foreground: '#FFFFFF',
        },
        
        warning: {
          DEFAULT: '#F59E0B',
          foreground: '#FFFFFF',
        },
        
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        
        accent: {
          DEFAULT: '#800020', // Oxblood for accents
          foreground: '#FFFFFF',
        },
        
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      
      backgroundImage: {
        'gradient-oxblood': 'linear-gradient(135deg, #800020 0%, #5C0015 100%)',
        'gradient-oxblood-light': 'linear-gradient(135deg, #A6002B 0%, #800020 100%)',
      },
      
      boxShadow: {
        'oxblood': '0 4px 14px 0 rgba(128, 0, 32, 0.15)',
        'oxblood-lg': '0 10px 25px 0 rgba(128, 0, 32, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;