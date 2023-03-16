/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2F4C39',
        'mint': '#98DED9',
      },
    },
  },
  plugins: [],
};
