import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6363",
      },
      backgroundImage: {
        // If you want to use an image, specify a valid URL or gradient here
        // 'custom-pattern': "url('/path/to/your/image.png')",
      },
    },
  },
  plugins: [],
};

export default config;
