/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#D2160A",
        darkbg:"#131424"
      },
      backgroundImage: {
        "gradiant-cover":
          "linear-gradient(90.21deg, rgba(170,54,124,0.5) -5.91%,rgba(74,47,189,0.5) 111.58%)"
      },
    },
  },
  plugins: [],
};
