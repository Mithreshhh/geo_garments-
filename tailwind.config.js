/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        geo: {
          red: '#C8102E',
          dark: '#0A0A0A',
          gold: '#C9A84C',
        },
      },
    },
  },
  plugins: [],
}
