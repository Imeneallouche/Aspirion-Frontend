const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "dark-blue": "#192841",
      blue: "#1c2e4a",
      "light-blue": "#0197f6",
      green: "#1EADA5",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
