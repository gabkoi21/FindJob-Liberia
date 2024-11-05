// {
//   import("tailwindcss").Config;
// }
// module.exports = {
//   content: ["/index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwindcss-elevation")],
// };

module.exports = {
  content: [
    "./index.html", // Include the root index.html file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include other files in src folder if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
