const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "dark-blue": colors.slate["900"],
      blue: "#1c2e4a",
      purple: "#1EADA5",
    },
    extend: {},
  },
  plugins: [],
};
