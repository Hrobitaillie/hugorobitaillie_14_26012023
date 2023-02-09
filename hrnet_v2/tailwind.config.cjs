/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter' : ['Inter','sans-serif']
      },
      boxShadow:{
        'header': '0px 0px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    colors: {
      green: "#93AD18",
      white: "#fff",
    },
  },
  plugins: [],
}
