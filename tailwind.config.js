/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      3: "repeat(auto-fit, minmax(329px, 384px))",
    },

    screens: {
      desktop: "1184px",

      "nav-brk": "868px",
      "prod-details-brk": "1100px",

      "grid-3-col-screen": "1218px",
      "grid-2-col-screen": "830px",
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
      "white-faded": "#FAFAFAF2",
    },

    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      42: "42px",
      48: "48px",
      64: "64px",
      128: "128px",
    },

    extend: {
      // keyframes: {
      //   ping: {
      //     75%, 100% {
      //       transform: scale(2);
      //       opacity: 0;
      //     }
      //   },
      // },
    },
  },
  plugins: [],
};
