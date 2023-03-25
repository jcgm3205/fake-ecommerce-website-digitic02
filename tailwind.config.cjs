/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-clr": "#131921",
        "sec-bg-clr": "#232f3e",
        "opaque-white": "rgba(255,255,255,0.1)",
        "primary-yellow": "#febd69",
        "primary-grey": "#3b4149",
      },
    },
  },
  plugins: [],
}
