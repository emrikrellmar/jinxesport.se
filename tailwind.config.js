/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#080B1A',
        cobalt: '#1B3BFF',
        neon: '#3CF8FF',
        sunset: '#FF006E',
        graphite: '#101424',
      },
      fontFamily: {
        display: ['"Oxanium"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(60, 248, 255, 0.45)',
      },
    },
  },
  plugins: [],
}
