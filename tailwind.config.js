{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-elevation")],
};
