/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      },
    },
  },
  plugins: [],
};
