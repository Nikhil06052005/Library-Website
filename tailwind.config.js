// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // depends on tumhare file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display', serif"],
        Lato: ["'Lato', sans-serif"],
      }
    },
  },
  plugins: [],
}
