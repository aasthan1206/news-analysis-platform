/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f0ebd8',
        'grey-light': '#748cab',
        'grey-medium': '#3e5c76',
        'grey-dark': '#1d2d44',
      },
    },
  },
  plugins: [],
}

