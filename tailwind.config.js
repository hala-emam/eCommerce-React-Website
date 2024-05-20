/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        // primary: "#fea928",
        // secondary: "#ed8900",
        // primary:"#E99FF4",
        // secondary:"#BB35AE"
        // primary:"#6e97da",
        // secondary:"#1a1e75"
        primary:"	#be29ec",
        secondary:"#6c22a3"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
