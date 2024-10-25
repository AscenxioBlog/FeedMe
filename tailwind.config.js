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
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

