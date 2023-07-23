/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : {
          500: '#602752',
          600: '#4A113C',
          900: '#392534',
        }
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

