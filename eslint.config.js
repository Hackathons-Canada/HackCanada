import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/*"],
  },
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
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    processor: astroPlugin.processors["client-side-ts"],
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.astro/*.ts", "*.astro/*.ts"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: null, // Disable project resolution for performance
      },
    },
    rules: {
      // Add any TypeScript-specific rules for client-side scripts here as we go
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
