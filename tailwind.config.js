/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    colors: {
      bg: {
        0: "#F2F8FF",
        1: "#FBFDFF",
      },
      primary: {
        900: "#3457D1",
        800: "#4062FF",
      },
      secondary: "#40BAFF",
      error: "#FF4842",
      success: "#54D62C",
      white: "#FFFFFF",
      black: "#000000",
      // gray: "#0B1D12",
      gray: {
        100: "#F9FAFB",
        200: "#F4F6F8",
        300: "#DFE3E8",
        400: "#C4CDD5",
        500: "#919EAB",
        600: "#637381",
        700: "#454F5B",
        800: "#212B36",
        900: "#161C24",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
