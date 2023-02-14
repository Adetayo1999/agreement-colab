/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        register: "url('../assets/images/login.jpg')",
      },
    },
  },
  plugins: [],
};
