/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // google colors
      colors: {
        gblue : '#4285F4',
        gred : '#EA4335',
        ggreen : '#34A853',
        gyellow : '#FBBC05',
      },
    },
  },
  plugins: [],
}