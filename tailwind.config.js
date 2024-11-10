/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./app.js"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
