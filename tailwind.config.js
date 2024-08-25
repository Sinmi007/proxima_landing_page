/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      screens: {
        "medium-screen": "855px",
      },
      colors: {
        purple: "#171026",
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "3rem",
    },
  },
  plugins: [require("daisyui")],
};
