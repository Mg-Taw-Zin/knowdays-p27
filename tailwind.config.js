/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["output/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#204d52",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
