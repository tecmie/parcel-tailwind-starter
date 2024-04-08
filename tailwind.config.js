module.exports = {
  content: ["./src/**/*.{html,hbs,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animatecss"), require("@tailwindcss/aspect-ratio")],
  theme: {
    animatedSettings: {
      animatedSpeed: 3000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ["bounce", "fadeIn", "bounceIn", "zoomIn", "zoomOut", "fadeInDown", "fadeInUp", "fadeOut", "zoomInUp", "zoomOut", "slideInDown", "slideInUp", "slideOutDown", "slideOutUp", "heartBeat"],
    },
    extend: {
      colors: {},
    },
  },
};
