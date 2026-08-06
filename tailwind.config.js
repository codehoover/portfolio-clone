/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#55f886",
        red: "#f85555",
        blue: "#557bf8",
        yellow: "#ffbc48",
        darkbg: "#1f1d1d",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        floatUp: "floatUp 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
