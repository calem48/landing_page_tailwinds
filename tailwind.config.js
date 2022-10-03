/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
   

    fontFamily: {
      'Bai': ['Bai Jamjuree', "sans-serif"]
    }

    ,
    container: {
      padding: '15px',
      center: true
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      gridTemplateColumns: {
        'custom-grid': 'repeat(auto-fit,minmax(300px,1fr))',
      }

    },
    screens: {},
    plugins: [],
  }
}
