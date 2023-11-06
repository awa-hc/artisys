/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        size_tam: '1300px',
      },
      backgroundColor: {
        'ff5f56': '#FF5F56',
        fondo: '#1E1E1E',
      },
      textColor: {
        'ff5f56': '#FF5F56',
      },
      fontFamily: {
        custom: ['Gilroy', 'sans'], // 'custom' es el nombre que asignamos a esta fuente
        'offbit': ['OffBit Trial', 'sans'],
      },
    },
  },
  variants: {},
  darkMode: "class",
  plugins: [nextui()],
}