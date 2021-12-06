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

      colors:{
        'dark-blue': '#323667',
        'gray':'#8C9CAC',
        'light-blue': '#29B8E8',
        'gradient-1': '#24E8B9',
        'gradient-2': '#29A9F5'
      },

      maxWidth:{
        '1170': '73.125rem'
      },

      height:{
        '85vh': '85vh'
      }
    },
  },
  variants: {},
  plugins: [],
}