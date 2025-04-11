import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          teal: "#2DD4BF", // teal-400
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "rgb(51, 51, 51)",
            fontFamily: "var(--font-space-mono), monospace",
            a: {
              color: "rgb(51, 51, 51)",
              "&:hover": {
                color: "rgb(107, 114, 128)",
              },
            },
            h1: {
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: "700",
            },
            h2: {
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: "700",
            },
            h3: {
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: "700",
            },
            code: {
              fontFamily: "var(--font-space-mono), monospace",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config
