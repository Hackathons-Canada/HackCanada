// Update as we go

export type NavLink = {
  label: string;
  href: string;
  external?: string; // If we want to open the link in a new tab
};

export type SocialLinks = {
  label?: string;
  href: string;
  icon: string; // Update as needed depending on the type of icon we use
};

export type FooterLink = {
  label: string;
  href: string;
  external?: string; // If we want to open the link in a new tab
};

export type faqItem = {
  question: string;
  answer: string;
};
