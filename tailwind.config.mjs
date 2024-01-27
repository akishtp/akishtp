/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {
      height: {
        "20vh": "20vh",
        "40vh": "40vh",
      },
      colors: {
        primary: "#70a0ff",
        "primary-hover": "#2481de",
        projects: "#c86fff",
        "projects-hover": "#9d00ff",
        gallery: "#fffa6f",
        "gallery-hover": "#ffd51b",
      },
      fontSize: {
        hero: [
          "30vh",
          {
            lineHeight: "20vh",
            letterSpacing: "-0.8rem",
            fontWeight: "700",
          },
        ],
        "hero-selected": [
          "20vh",
          {
            lineHeight: "16vh",
            letterSpacing: "-0.4rem",
            fontWeight: "700",
          },
        ],
      },
      keyframes: {
        marquee: {
          "0%": { left: "100%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};
