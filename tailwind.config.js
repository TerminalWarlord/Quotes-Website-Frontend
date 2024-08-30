import daisyui from "daisyui"
import form from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

  },
  plugins: [
    daisyui,
    form,
  ],
  daisyui: {
    themes: ["light", "dark"], // Add the themes you want to use
  },
}