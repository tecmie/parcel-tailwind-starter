module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./src/**/*.{html,hbs,js,ts,jsx,tsx}"],
  },
  // content: ["./src/**/*.{html,hbs,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"),  require('taos/plugin'), require("@tailwindcss/aspect-ratio")],
  theme: {
    extend: {
      colors: {},
    },
  },
};
