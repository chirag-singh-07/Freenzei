/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary":"#9A7AF1",
        "tartinary":"#707070",
        "pink":"#EE9AE5"
      },
      boxShadow:{
        '3xl':'0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'slide-fade-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-fade-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-fade-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-fade-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-fade-up': 'slide-fade-up 0.5s ease-out',
        'slide-fade-down': 'slide-fade-down 0.5s ease-out',
        'slide-fade-left': 'slide-fade-left 0.5s ease-out',
        'slide-fade-right': 'slide-fade-right 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

