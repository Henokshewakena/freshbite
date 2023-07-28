/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        imprima: ["Alkatra", "cursive"],
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        "leafy-green": "#359F23",
        "back-grey": "#C3E5EF",
      },
    },
  },
  plugins: [],
};
