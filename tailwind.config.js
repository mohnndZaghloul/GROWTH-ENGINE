/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
    colors: {
      light: "#fff",
      primary: {
        100: "#ffc8b4",
        200: "#ffad8d",
        300: "#ff906a",
        400: "#fc7843",
      },
      secondary: {
        100: "#a8b3b9",
        200: "#7c8d97",
        300: "#526574",
        400: "#243f50",
      },
      dark: {
        100: "#1a1a1a",
        200: "#1d1e21",
        300: "#6b6c6c",
      },
    },
    extend: {},
  },
  plugins: [],
};
