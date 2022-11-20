/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'san-serif'],
        kaushan: ['Kaushan Script', 'cursive']
      },
      colors: {
        "pry-clr-0": "rgb(16, 42, 66)",
        "pry-clr-1": "rgb(186, 93, 44)",
        "pry-clr-2": "rgb(218, 130, 82)",
        "pry-clr-3": "rgb(134, 56, 14)",
        "pry-clr-4": "rgb(97,125,152)",
        "pry-clr-5": "rgb(241,245,248)",
        "pry-clr-6": "rgb(34, 34, 34)",
        "pry-clr-7": "rgb(248,250,252)",
        "pry-clr-8": "rgb(226, 232, 240)",
        "pry-clr-9": "rgb(100, 116, 139)",
        "pry-clr-10": "rgb(51, 65, 85)",
        "pry-clr-11": "rgb(15, 23, 42)",
        "pry-clr-12": "rgb(100, 92, 255)",
        "pry-clr-13": "rgb(60, 55, 153)",
        "pry-clr-14": "rgb(15, 23, 42)",
        "pry-clr-15": "rgb(51, 65, 85)",
        "pry-clr-16": "rgb(100, 116, 139)",
        "pry-clr-z": "rgba(0, 0, 0, 0.5)",
      },
      screen: {
        sm: "600px",
        md: '900px',
        lg: '1280px'
      }
    },
  },
  plugins: [],
}