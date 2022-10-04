/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}"
  ],
  theme: {

    fontFamily: {
      'Bai': ['Bai Jamjuree', "sans-serif"]
    },



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
      colors: {
        'custom-blue': "#00375d"
      },
      boxShadow: {
        'custom': '0 14px 28px rgb(139 138 138 / 25%), 0 10px 10px rgb(121 120 120 / 22%)',
        'nav': "0px 0px 11px -5px",
        "card-md": "0 2px 11px rgb(139 138 138 / 27%), 0 3px 50px rgb(121 120 120 / 22%)"
      },

      gridTemplateColumns: {
        'custom-grid': 'repeat(auto-fit,minmax(300px,1fr))',
        'custom-card': 'repeat(auto-fit,minmax(250px,1fr))',
        'custom-card-2': 'repeat(auto-fit,minmax(350px,1fr))',
        'custom-grid-third': 'repeat(auto-fit,minmax(350px,1fr))',
      },

    },
    screens: {},
    plugins: [

    ],
  }
}
