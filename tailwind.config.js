/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'first':'#F5F0BB',
      'second':'#C4DFAA',
      'tird':'#90C8AC',
      'forth':'#73A9AD'
    },
    borderWidth:{
      'caja': '1px solid rgb(40, 105, 204)'
    },
    container:{
      center:true
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite/plugin')
  ],
}
