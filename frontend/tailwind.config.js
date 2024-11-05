/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'var(--dark)',
        'light': 'var(--light)',
      },
      boxShadow: {
        'custom': '0px 0px 50px 0px rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}

