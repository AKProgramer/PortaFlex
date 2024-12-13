/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(244, 244, 244, 1)", // white background
        secondary: "rgba(0, 0, 0, 1)", // black 
        tertiary: "#6b7280", // grey-500 
        textColor: "rgba(255, 255, 255, 1)", // white color for text
        whiteButton: "rgba(255, 255, 255, 1)", // dashboard button color
        footer: "rgba(42, 42, 42, 1)", // dashboard button color
       
       
      },
      fontFamily: {
        neueMontreal: ['"Neue Montreal"', 'sans-serif'],
        recklessNeue: ['"Reckless Neue"', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
