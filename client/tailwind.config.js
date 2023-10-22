/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: "#FFFFFF",
        secondary: "#d96217",
        tertiary: "#582e11",
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/beekeper.png')",
        "bee-background-one": "url('/src/assets/beeBackgroundBori.jpg')",
        "bee-background-two": "url('/src/assets/beeBackgrundTwo.jpg')",
        "bee-background-three": "url('/src/assets/beeBackgrundThree.jpg')",
        "bee-background-four": "url('/src/assets/beeBackgrundFour.jpg')",
      },
    },
  },
  plugins: [],
};