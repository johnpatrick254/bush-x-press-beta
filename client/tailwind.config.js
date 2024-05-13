/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     colors: {
      primary: '#FDFDFD',
      secondary: '#1E1F1D',
      tertiary: '#F0F0F0',
     }
  },
  plugins: [],
}
}
