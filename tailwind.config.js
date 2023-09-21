/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sen: "Sen",
      },
      colors: {
        primary: '#8D8DDB',
        secondary: '#1F1B57',
        tertiary: '#8BD1D2',
        quaternary: "#2E2C64"
      },
      lineHeight: {
        lineh1: "65px",
        linep: "30px"
      },
      margin: {
        quadra: '80px',
      },
      borderRadius: {
        ultra: "100%",
      }
    },
  },
  plugins: [],
}