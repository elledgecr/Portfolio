/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f66b4b",
        accent: "#03fdbb",
        darkOne: '#222222',
        darkTwo: '#1f1f1f',
      }
    },
  },
  plugins: [],
}