/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    './src/**/*.{html,js,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171717',
        secondary: '#00DF5E',

        gray: {
          800: '#212121',
          400: '#828282'
        }
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
