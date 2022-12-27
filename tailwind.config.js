/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        800: "75vh",
      },
      width: {
        1500: "1/2",
      },
      screens: {
        lmd: "1000px",
        mil500: "1500px",
      },
    },
  },
  plugins: [require("daisyui")],
};
