import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#26326E',
        'brand-blue': '#26326E',
        secondary: '#4E5D94',
        'brand-blue-muted': '#4E5D94',
        'navy-dark': '#1C1C1E',
        'primary-text': '#1C1C1E',
        'primary-bg': '#F7F8FC',
        'brand-blue-accent': '#5F6EA6',
        'background-light': '#F7F8FC',
        'background-dark': '#16141e',
        'brand-gold': '#C9B88A',
        'light-gold': '#f2b90d',
        teal_step: '#4D908E',
        peach: '#E9A68E',
        lavender: '#9B86BD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        CARD_DEFAULT: '1.5rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease forwards',
        'slide-up': 'slideUp 0.2s ease forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
    },
  },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/container-queries'),
//   ],
}

export default config