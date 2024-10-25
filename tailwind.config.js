/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#09B451",
        "light-blue": "#DDFFFF",
        "light-blue-2": "E4FFFF",
        "light-green": "#E7FAEF",
        gray: "#404040",
        "dark-red": "#6A0000",
        dark2: "#333333",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "source-sans-3": ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
