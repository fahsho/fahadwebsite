import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        accent: {
          DEFAULT: "var(--accent)",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Iowan Old Style", "Palatino Linotype", "Palatino", "serif"],
        sans: ["var(--font-newsreader)", "Iowan Old Style", "Palatino Linotype", "Palatino", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
