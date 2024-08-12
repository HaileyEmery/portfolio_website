import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': {
        100: '#ebe4fe',
        200: '#c4aefb',
        300: '#9d78f8',
        400: '#7642f5',
        500: '#4e0df2',
        600: '#3d0abd',
        700: '#2c0787',
        800: '#1a0451',
        900: '#09011b',
      },
      'pink': {
        100: '#f8e4fe',
        200: '#eaaefb',
        300: '#dd78f8',
        400: '#cf42f5',
        500: '#c10df2',
        600: '#960abd',
        700: '#6b0787',
        800: '#400451',
        900: '#15011b',
      },
      'blue': {
        100: '#e4eafe',
        200: '#aebffb',
        300: '#7894f8',
        400: '#4269f5',
        500: '#0d3ff2',
        600: '#0a31bd',
        700: '#072387',
        800: '#041551',
        900: '#01071b',
      }
    },
  },
  plugins: [],
};
export default config;
