/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',  // Ajoute une nouvelle classe 'h-128' pour une hauteur de 32rem
      },
      colors:{
        primary : "#3120c7",
        lightcolor : "#d6b8e3",
        darkcolor : "#252734"
      },
      container : {
        center : true,
        padding : {
          DEFAULT : '1rem',
          sm : '2rem',
   /*        lg : '4rem',
          xl : '5rem',
          '2xl' : '6rem',  */
        }
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

