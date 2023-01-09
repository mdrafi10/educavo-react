/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        headerTopBg: "#273c66", //--bg-color
        btnBg: "#21a7d0", //----btn-bg
        textColor: "#394459", //--text-color
        textColorSecondary: "#112958", //--text-color2
        textGray: "#505050", //--text-gray
        grayBg: "#f3f8f9", //--gray-bg
        hover: "#23b0db",
        // RGB color
        borderColor: "rgba(78, 85, 88, 0.582)",
        rgbBg: "rgba(17, 41, 88, 0.9)",
      },
    },
  },
  plugins: [],
};
