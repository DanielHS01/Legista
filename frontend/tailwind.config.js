
/** @type {import('tailwindcss').Config} */ 
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": {
          900: "#010011",
        }
      }
    },
  },
  plugins: [],
}