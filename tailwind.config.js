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
          wine: '#8B1E3F',
          'wine-deep': '#6E1730',
          onyx: '#0B0A08',
          'onyx-soft': '#1A1815',
          gold: '#B8935B',
          'gold-soft': '#D4B88A',
          ivory: '#F6F1E8',
          pearl: '#EDE6D8',
          stone: '#6B625A',
          red: '#8B1E3F',
          dark: '#0B0A08',
        },
      },
    },
  },
  plugins: [],
}
