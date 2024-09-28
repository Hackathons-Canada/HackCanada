import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
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
        // Additional animations
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", scale: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotateSlow: "rotateSlow 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, matchUtilities, theme }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);

      // Add custom animation delay utilities
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        { values: theme("animationDelay") },
      );
    }),
    animatePlugin,
    tailwindTypography,
  ],
};
