module.exports = {
  content: [
    "./src/**/*.{html,hbs,js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};
