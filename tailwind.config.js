/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "strong-cyan": "hsl(172, 67%, 45%)",
      "very-dark-cyan": "hsl(183, 100%, 15%)",
      "very-dark-cyan-opacity": "hsla(183, 78%, 24%, 1)",
      "dark-grayish-cyan": "hsl(186, 14%, 43%)",
      "grayish-cyan": "hsl(184, 14%, 56%)",
      "light-grayish-cyan": "hsl(185, 41%, 84%)",
      "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      redish: "hsl(13, 70%, 60%, 100%)",
      white: "hsl(0, 0%, 100%)",
      transparent: "rgba(0, 0, 0, 0)",
    },
    extend: {
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
