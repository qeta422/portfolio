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
        'marquee': 'marquee 20s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s infinite',
        'flip': 'flip 0.7s',
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
        },
        blink: {
          '0%, 50%': {
            opacity: '1'
          },
          '51%, 100%': {
            opacity: '0'
          }
        },
        flip: {
          '0%': {
            transform: 'rotateY(0deg)'
          },
          '100%': {
            transform: 'rotateY(180deg)'
          }
        }
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      grayscale: {
        DEFAULT: '100%',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
          '-webkit-backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.grayscale-hover': {
          filter: 'grayscale(100%)',
          transition: 'filter 0.3s ease-in-out',
          '&:hover': {
            filter: 'grayscale(0%)',
          },
        },
        '.pause-animation-on-hover': {
          '&:hover .animate-marquee': {
            animationPlayState: 'paused',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}