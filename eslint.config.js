import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import astroPlugin from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      // Add any additional TypeScript rules here
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      // Add any additional React rules here
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      // Add any additional Astro rules here
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "no-console": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
