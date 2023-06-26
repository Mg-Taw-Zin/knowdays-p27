/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["output/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#204d52",
        "secondary-color": "#204d45",
        "thirdary-color": "#adcfff",
      },
      height: {
        "75vh": "100vh",
        "150vh": "150vh",
   
      },
      width:{
        "300px":"300px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
