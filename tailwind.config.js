/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        carbon: '#1A1A1A',
        ash: '#101010',
        snow: '#FFFFFF',
        fuchsia: '#FF007F',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(255, 0, 127, 0.35)',
      },
    },
  },
  plugins: [],
}
