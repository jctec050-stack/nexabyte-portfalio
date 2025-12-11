/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0A0E27",
        primary: {
          cyan: "#00D4FF",
          purple: "#9D4EDD",
        },
        text: {
          main: "#FFFFFF",
          muted: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #00D4FF 0deg, #9D4EDD 180deg, #00D4FF 360deg)",
      },
    },
  },
  plugins: [],
};