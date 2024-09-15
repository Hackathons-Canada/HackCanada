// Update as we go

import type { Props } from "simple-icons-astro";

export type NavLink = {
  label: string;
  href: string;
  external?: string; // If we want to open the link in a new tab
};

// eslint-disable-next-line no-unused-vars
type IconElement = (_props: Props) => any;

export type SocialLink = {
  label?: string;
  href: string;
  icon: IconElement;
};
