import types from "astro/client";

declare global {
  const env: typeof types.env;
}
