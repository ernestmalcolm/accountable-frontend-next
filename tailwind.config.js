/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkgray: "#1E1E1E",
      lightgray: "#EEF1FF",
      gray: "#323232",
      teal: "#0B595C",
      lightteal: "#14FFEC",
    },
  },
  plugins: [],
};
