/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "nav-brk": "868px",
      desktop: "1184px",
    },

    fontSize: {
      sm: "12px",
      body: ["16px", "24px"],

      //Desktop font sizes
      "dsk-h1": ["64px", "80px"],
      "dsk-h2": ["48px", "64px"],
      "dsk-h3": ["32px", "40px"],
      "dsk-h4": "24px",

      // Mobile font sizes
      "mb-h1": ["48px", "64px"],
      "mb-h2": ["32px", "40px"],
      "mb-h3": ["24px", "32px"],
      "mb-h4": ["18px", "24px"],
    },

    colors: {
      white: "#FAFAFA",
      black: "#323444",
      active: "#FFEB66",
      attention: "#D34723",
      "black-faded": "#323444BF",
    },

    spacing: {
      0: "0px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      42: "42px",
      64: "64px",
    },

    extend: {},
  },
  plugins: [],
};
