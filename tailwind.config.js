/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f66b4b",
        accent: "#5DE2E7",
        darkOne: '#222222',
        darkTwo: '#1f1f1f',
        darkThree: '#303030',
      }
    },
  },
  plugins: [],
}