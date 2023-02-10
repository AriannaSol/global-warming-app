/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "h1-white": "#dedee0",
      },
    },
    screens: {
      xs: { max: "450px" },
    },
    maxHeight: {
      55: "55rem",
    },
  },
  plugins: [],
};
