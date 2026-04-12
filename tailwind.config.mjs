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
        /** Invitación / boda — verde bosque, crema, rosa polvo, azul apagado, terracota */
        forest: {
          DEFAULT: "#445842",
          deep: "#2E3D2C",
        },
        cream: {
          DEFAULT: "#F6EBDD",
          soft: "#F4EBDC",
        },
        blush: "#E8A2BA",
        mist: "#94B3C5",
        clay: "#C28359",
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