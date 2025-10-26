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
      keyframes: {
        'heroPulse-outer': {
          '0%': { transform: 'scale(0.98)', opacity: '0.6' },
          '50%': { transform: 'scale(1)', opacity: '0.95' },
          '100%': { transform: 'scale(0.98)', opacity: '0.6' },
        },
        'heroPulse-inner': {
          '0%': { transform: 'scale(0.95)', opacity: '0.45' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0.45' },
        },
      },
      animation: {
        'heroPulse-outer': 'heroPulse-outer 4s ease-in-out infinite',
        'heroPulse-inner': 'heroPulse-inner 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
