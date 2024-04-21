/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        customCream : "#FCF9EF",
        customGreen : "#005051",
        customBlue : "#003164"
      }
    },
  },
  plugins: [],
}

