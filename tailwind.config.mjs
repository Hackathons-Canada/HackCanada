import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        baloo: ["Baloo", "sans-serif"],
      },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textShadow: {
        "3d": "0 1px 0 #e0e0e0, 0 2px 0 #d9d9d9, 0 3px 0 #ccc, 0 4px 0 #c9c9c9, 0 5px 0 #bbb, 0 6px 1px rgba(0,0,0,.05), 0 0 3px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.12), 0 5px 5px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addUtilities({
        ".text-3d": {
          "text-shadow":
            "0 1px 0 #e0e0e0, 0 2px 0 #d9d9d9, 0 3px 0 #ccc, 0 4px 0 #c9c9c9, 0 5px 0 #bbb, 0 6px 1px rgba(0,0,0,.05), 0 0 3px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.12), 0 5px 5px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.08)",
        },
      });
    }),
    animatePlugin,
    tailwindTypography,
  ],
};
