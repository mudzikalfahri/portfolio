module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xx: ".72rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        cusblue: "#F8FCFD",
        bg: "#fafafa",
        darkblue: "#171923",
        uiblue: "#242736",
        navblue: "#2F3448",
      },
      animation: {
        "pulse-slow": "pulse 8s linear infinite",
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
