/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-[#61DAFB]',
    'text-[#3178C6]',
    'text-[#06B6D4]',
    'text-[#FFD43B]',
    'text-[#e15a2d]',
    'text-[#FF6B6B]',
    'text-[#FFA116]',
    'text-[#d779c6]',
    'text-[#9128fb]',
    'text-[#F24E1E]',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#8892b0',
        dark: '#0a192f',
        light: '#ccd6f6',
      },
      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideInLeft': 'slideInLeft 1s ease-out',
        'slideInRight': 'slideInRight 1s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
    },
  },
  plugins: [],
}
