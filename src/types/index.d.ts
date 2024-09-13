// Update as we go

export type NavLink = {
  label: string;
  href: string;
  external?: string; // If we want to open the link in a new tab
};

export type SocialLink = {
  label?: string;
  href: string;
  icon: string;
  iconV2?: string;
};
