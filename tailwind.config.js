/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#204d52",
        "secondary-color": "#204d45",
        "thirdary-color": "#adcfff",
      },
      height: {
        "50vh": "50vh",
        "75vh": "75vh",
        "100vh": "100vh",
        "150vh": "150vh",
      },
      width: {
        "300px": "300px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("autoprefixer")],
};
