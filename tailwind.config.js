const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      height: {
        '120': '30rem',  // equivalent to 480px
        '128': '32rem',  // equivalent to 512px
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      animation: {
        slideUp: 'slideUp 1s ease-in-out forwards',
      },
      perspective: {
        '1000': '1000px',
      },
      colors: {
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
      })
    }
  ],
}

