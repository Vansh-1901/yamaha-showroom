/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // Indigo
        secondary: "#2563eb", // Blue
        accent: "#facc15", // Yellow
        greenBtn: "#16a34a", // Green
        darkGray: "#1f2937", // Dark Gray
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
