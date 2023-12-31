/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" /* src folder, for example */,
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
