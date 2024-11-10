/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./app.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
