/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
        sora: ["Sora"],
        poppins: ["Poppins"],
      },
      screens: {
        "medium-screen": "855px",
      },
      colors: {
        purples: "#171026",
        green20: "#DDFF00",
        purple20: "#854DFC",
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
