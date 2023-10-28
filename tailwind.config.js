/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-dark': '#B40421',
        'red-light': '#EF233C',
        'grey-light': '#F5F5F5',
        'grey-medium': '#1F1F1F',
        'grey-dark': '#0A0A0A',
      },
      fontFamily: {
        crimson: ["CrimsonText-Regular"],
        merri: ["Merriweather-Regular"],
        tiltneon: ["TiltNeon-Regular"],
      },
      backgroundImage: {
        'profile': "url('/src/assets/images/np3.jpg')",
        'hero': "url('/src/assets/images/hero.jpg')",
        'eg1': "url('/src/assets/images/eg1.jpeg')",
        'eg2': "url('/src/assets/images/eg2.jpeg')",
        'negNews': "url('/src/assets/images/newsNeg.jpg')",
      },
    },
  },
  plugins: [],
}

