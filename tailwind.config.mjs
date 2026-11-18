/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        /** Paleta de azules — azul profundo (forest), blanco azulado (cream), celeste (blush), cian (mist), azul brillante (clay) */
        forest: {
          DEFAULT: "#1D3F72",
          deep: "#0F2447",
        },
        cream: {
          DEFAULT: "#FFFFFF",
          soft: "#F1F5FB",
        },
        blush: "#9CC4F2",
        mist: "#7FD3E8",
        clay: "#2F7DE1",
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};