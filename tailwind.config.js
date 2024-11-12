// tailwind.config.js
module.exports = {
  content: [
    "./*.html",            // All HTML files in the root directory
    "./css/*.css",          // Your CSS folder if you’re using Tailwind in CSS files
    "./src/**/*.{js,jsx,ts,tsx}", // All JavaScript/React files in the src directory (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
