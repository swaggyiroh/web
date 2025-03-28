/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        zendots: ['Zen Dots','sans-serif'],
        doto: ['Doto', 'sans-serif'],
        vt323:['VT323', 'sans-serif']
      }
    },
    gridTemplateColumns: {
      '70/30': '70% 28%'
    },
  },
  plugins: [],
}

