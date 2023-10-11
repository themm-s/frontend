/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'lr': '0px 0px 10px 10px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};