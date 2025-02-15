/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // This is important to prevent conflicts with Ionic's styles
  corePlugins: {
    preflight: false,
  }
} 