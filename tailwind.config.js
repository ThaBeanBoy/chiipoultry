/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'nav-brk': '868px'
    },

    colors: {
      white: "#FAFAFA",
      black: "#323444",
      active: "#FFEB66",
      attention: "#D34723",
      "black-faded": "#323444BF",
    },

    spacing: {
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      42: '42px',
      64: "64px",
    },

    extend: {},
  },
  plugins: [],
};
