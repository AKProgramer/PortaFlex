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
        primary: {
          DEFAULT: "#1D4ED8", // Main primary color
          light: "white", // Lighter shade
          dark: "grey", // Darker shade
        },
        secondary: {
          DEFAULT: "#9333EA", // Secondary color
          light: "#A855F7", 
          dark: "#7E22CE", 
        },
        accent: {
          DEFAULT: "#F59E0B", // Accent color
          light: "#FBBF24", 
          dark: "#B45309", 
        },
        neutral: {
          light: "#F3F4F6", // Light background
          DEFAULT: "#D1D5DB", // Neutral default
          dark: "#374151", // Dark text or elements
        },
        danger: "#EF4444", // Danger (e.g., error messages)
        success: "#22C55E", // Success (e.g., success messages)
        warning: "#FACC15", // Warning
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Default sans-serif
        serif: ["Merriweather", "ui-serif", "Georgia"], // Default serif
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"], // Default monospace
        display: ["Poppins", "sans-serif"], // For headings and display text
        body: ["Roboto", "sans-serif"], // For body text
      }
    },
  },
  plugins: [],
};
