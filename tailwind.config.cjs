/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },
      screen: {
        sm: "600px",
        md: '900px',
        lg: '1200px'
      }
    },
  },
  plugins: [],
}