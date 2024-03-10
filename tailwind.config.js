/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero-pattern": "url('/src/assets/bg-main-mobile.png')",
        "hero-pattern": "url('/src/assets/bg-main-desktop.png')",
        // "front-image": "url('/src/assets/bg-card-front.png)",
        // "back-image": "url('/src/assets/bg-card-back.png)",
      },
    },
  },
  plugins: [],
};
