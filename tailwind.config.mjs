// tailwind.config.mjs
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        huninn: ["Huninn", "sans-serif"], // If you're still using it
        grotesk: ["'Space Grotesk'", "sans-serif"],
        noto: ["'Noto Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
