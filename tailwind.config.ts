import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body:    ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        base:    'var(--bg-base)',
        surface: 'var(--bg-surface)',
        inset:   'var(--bg-inset)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary':  'var(--text-tertiary)',
        border:           'var(--border)',
        brand: {
          purple: {
            DEFAULT: '#7c3aed',
            mid:     '#8b5cf6',
            light:   '#a78bfa',
            soft:    '#ede9fe',
            text:    '#4c1d95',
          },
          pink: {
            DEFAULT: '#db2777',
            mid:     '#ec4899',
            light:   '#f472b6',
            soft:    '#fce7f3',
            text:    '#831843',
          },
          blue: {
            DEFAULT: '#2563eb',
            mid:     '#3b82f6',
            light:   '#60a5fa',
            soft:    '#eff6ff',
            text:    '#1e3a8a',
          },
        },
        success: {
          DEFAULT: '#16a34a',
          mid:     '#22c55e',
          soft:    '#dcfce7',
          text:    '#14532d',
        },
        warning: {
          DEFAULT: '#d97706',
          mid:     '#f59e0b',
          soft:    '#fef3c7',
          text:    '#78350f',
        },
        danger: {
          DEFAULT: '#dc2626',
          mid:     '#ef4444',
          soft:    '#fee2e2',
          text:    '#7f1d1d',
        },
        'ap-purple':      'var(--ap-purple)',
        'ap-purple-mid':  'var(--ap-purple-mid)',
        'ap-purple-light':'var(--ap-purple-light)',
        'ap-purple-soft': 'var(--ap-purple-soft)',
        'ap-purple-text': 'var(--ap-purple-text)',
        'ap-pink':        'var(--ap-pink)',
        'ap-pink-mid':    'var(--ap-pink-mid)',
        'ap-pink-soft':   'var(--ap-pink-soft)',
        'ap-pink-text':   'var(--ap-pink-text)',
        'ap-blue':        'var(--ap-blue)',
        'ap-blue-soft':   'var(--ap-blue-soft)',
        'ap-blue-text':   'var(--ap-blue-text)',
      },
      borderRadius: {
        sm:   '10px',
        md:   '14px',
        lg:   '20px',
        xl:   '28px',
        '2xl':'36px',
        pill: '9999px',
      },
      boxShadow: {
        xs:        '0 1px 2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)',
        sm:        '0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        md:        '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        lg:        '0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)',
        purple:    '0 2px 8px rgba(124,58,237,0.30)',
        'purple-lg':'0 4px 16px rgba(124,58,237,0.40)',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [tailwindAnimate],
}

export default config
