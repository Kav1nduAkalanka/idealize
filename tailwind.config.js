/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4d60bd",
        secondary: "#75a1c6",
        tertiary: "#a5b4fc",
        background: "#020617",
        surface: "#0f172a",
        "on-background": "#f1f5f9",
        "on-surface": "#f1f5f9",
        "on-primary": "#ffffff",
        "primary-container": "#1e293b",
        "surface-container-low": "#020617",
        "surface-container": "#1e293b",
        "surface-container-high": "#334155",
        "on-surface-variant": "#94a3b8",
        outline: "#475569",
        "outline-variant": "#1e293b",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
