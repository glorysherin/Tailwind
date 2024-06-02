/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"

  ],






  
  theme: {
    extend: {
      colors:{
        'pure-red':'#FF0000',
        'new-color':'#009688'
      },
      fontWeight:{
        'newbold':700
      }
    },
    fontFamily:{
     oswald:["Oswald",'sans-serif'] 
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
    },
    // screens:{
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // }
  },
  plugins: [],
  darkMode:"selector"
}

