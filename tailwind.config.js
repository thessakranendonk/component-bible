/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*/*.html', './components/**/*.{html,js}'],
  presets: [require('./tailwind-preset')],
  theme: {
    extend: {
      width: {
        mapXLBg: '64rem',
        mapXL: '60rem',
      },
      height: {
        mapSidePanelXL: '38rem',
      },
    },
  },
  plugins: [],
};
