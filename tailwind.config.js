/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluelight: "#BECBCB47",
        secondary: "#10302F",
        tertiary: "#5D5A5B",
        graywhite: "#F2ECE4",
        greendeep: "#184645",
        graylight: "#D2D1D133",
        grayserch: "#879F9E",
        grayscale: "#4E4C4C",
        grayscale800: "#161615",
        grayscaleborderdarker: "#3F3D3E",
        green500: "#184645",
        grayscaletext: "#5D5A5B",
      },
    },
  },
  plugins: [],
};
