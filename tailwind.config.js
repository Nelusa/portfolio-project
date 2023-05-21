/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F9BD06",
        secondary: "#FACA38",
        tertiary: "#F9D06C",
      },
      fontFamily: {
        body: ["Sulphur Point", "sans-serif"],
        heading: ["Turret Road"],
      },
      cursor: {
        custom: "url(/cursor2.png), default",
      },
    },
  },
  plugins: [],
};
