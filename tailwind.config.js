/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["output/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#204d52",
        "secondary-color": "#204d45",
      },
      height: {
        "75vh": "75vh",
        "150vh": "150vh",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
