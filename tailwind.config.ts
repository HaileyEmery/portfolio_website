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
        100: '#9476AB',
        200: '#714C8F',
        300: '#522B72',
        400: '#381356',
        500: '#210439',
      },
      'pink': {
        100: '#C180AD',
        200: '#A15088',
        300: '#802B67',
        400: '#601048',
        500: '#40002D',
      },
      'blue': {
        100: '#857DB1',
        200: '#5D5393',
        300: '#863176',
        400: '#221858',
        500: '#0F073B',
      }
    },
  },
  plugins: [],
};
export default config;
