import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        bg: '#0a0f1e',
        surface: '#0f1629',
        border: '#1e2d4a',
        primary: '#e8edf5',
        muted: '#6b7fa3',
        accent: '#00d4ff',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'var(--font-noto-sans-jp)', 'sans-serif'],
      },
    },
  },
} satisfies Config
