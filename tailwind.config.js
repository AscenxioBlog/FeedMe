/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff, hsla(0, 0%, 100%, 0))',
        'foraside':'linear-gradient(195deg,#5F8670  , #191919)'
      },
      colors: {
        'custom-orange': '#5F8670',
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }, // Shift half to avoid jumping
        },
      },
      boxShadow: {
        'subtle-all': '0px 3px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

