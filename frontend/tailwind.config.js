/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000', // Explicitly define black to ensure it's included
        white: '#ffffff', // Define white if needed
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 5s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '75%': { 'background-position': '0% 100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      },
    },
  },
  plugins: [],
}
