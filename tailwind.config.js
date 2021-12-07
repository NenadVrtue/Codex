// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    fontFamily:{
      'body':['Epilogue', 'sans-serif'],
      'display':['Public Sans', 'sans-serif']
    },
    extend: {
      borderRadius:{
        'large':'3.75rem'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      fontSize:{
        'h2':'2.625rem',
        '22':'1.375rem'

      },
      screens:{
        'mob':'450px',
        '3xl':'1700px'
      },
      colors:{
        'dark-blue': '#323667',
        'bg-blue':'#F7FCFF',
        'gray':'#8C9CAC',
        'gray-2':'#73839C',
        'light-blue': '#29B8E8',
        'gradient-1': '#24E8B9',
        'gradient-2': '#29A9F5'
      },

      maxWidth:{
        '1170': '73.125rem',
        '1440':'90rem'
      },

      height:{
        '85vh': '85vh'
      }
    },
  },
  variants: {},
  plugins: [],
}