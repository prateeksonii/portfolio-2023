const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        head: ['Sloth', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
