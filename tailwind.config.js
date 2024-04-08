module.exports = {
  content: [
    "./src/**/*.{html,hbs,js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
      fontSize: {
        sm: '1.45rem',
        base: '1.852rem',
        xl: '2rem',
        '2xl': '3.3rem',
        '3xl': '4.3rem',
        '4xl': '5.415rem',
        '5xl': '7.52rem',
        '6xl': '9.52rem',
      },
    extend: {
      colors: {},
    },
  },
};
