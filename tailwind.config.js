/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', ],
  theme: {
    extend: {
      colors: {
        'magentaPrimary': '#FF00FF',
        'cyanPrimary': '#00FFFF',
        'yellowPrimary': '#FFFF00',
        'greenPrimary': '#00FF00',
        'secondary': {
          'magenta': '#FF00FF',
          'cyan': '#00FFFF',
          'yellow': '#FFFF00',
          'green': '#00FF00',
        },
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif', 'Poppins'],
        'body': ['Inter', 'Nunito']
      }
    },
  },
  plugins: [],
}

