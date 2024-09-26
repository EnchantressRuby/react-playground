/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // content: [],
  //? Add this section to include our custom theme settings
  theme: {
    //! To add custom settings without replacing Tailwind's default theme, we must use the extend object. Otherwise, the entire theme will be overridden, and only our custom settings will be available.

    extend: {
      colors: {
        primary: "#624E88",
        primary_hover: "#8967B3",
        dark: "#526D82",
        darker: "#27374D",
      },
    },
  },

  // plugins: [],
  darkMode: "selector",
};
