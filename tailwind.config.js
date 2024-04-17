const colors = require("tailwindcss/colors");

/**@var destructure and remove deprecated colors */
const { blueGray, lightBlue, warmGray, trueGray, coolGray, ...twColors } = colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["!duration-[0ms]", "!delay-[0ms]", 'html.js :where([class*="taos:"]:not(.taos-init))'],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{html,hbs,js,ts,jsx,tsx}"],
  },
  // content: ["./src/**/*.{html,hbs,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("taos/plugin"), require("@tailwindcss/aspect-ratio")],
  theme: {
    colors: {
      ...twColors,
      mugabe: {
        100: "#75E0BC",
        200: "#0DCB8B",
        300: "#0DAE78",
        500: "227A5E", // dark teal text
      },
      gray: {
        50: "#F9FAFB",
        100: "#E7E9E6",
        200: "#CFD4D0",
        300: "#B7BDB9",
        400: "#9EA5A1",
        500: "#828D88",
        600: "#67736D",
        700: "#4A5752",
        800: "#2A3833",
        900: "#05140F",
      },

      teal: {
        10: "#effaf4",
        20: "#d9f2e3",
        50: "#b5e5ca",
        100: "#C9F3E5",
        200: "#75E0BC",
        300: "#33E3A8",
        400: "#16976D",
        500: "#207b56",
        600: "#1C644D",
        700: "#164F3D",
        800: "#0E3427",
        900: "#0B291F",
      },
    },
    extend: {
      // colors: {
      //   ...colors,
      //   gray: {
      //     50: "#F9FAFB",
      //     100: "#E7E9E6",
      //     200: "#CFD4D0",
      //     300: "#B7BDB9",
      //     400: "#9EA5A1",
      //     500: "#828D88",
      //     600: "#67736D",
      //     700: "#4A5752",
      //     800: "#2A3833",
      //     900: "#05140F",
      //   },
      // },
      // teal: {
      //   50: '#C9F3E5',
      //   100: "#75E0BC",
      //   200: "#9AE4CC",
      //   300: "#33E3A8",
      //   330: "#0DCB8B",
      //   390: "#0DAE78",
      //   400: "#16976D",
      //   500: "#1F8061",
      //   600: "#1C644D",
      //   700: "#164F3D",
      //   800: "#0E3427",
      //   890: "#0B291F", // custom
      //   900: "#05140F",
      // },
    },
  },
};
