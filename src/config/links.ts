import type { NavLink, SocialLink } from "@/types";
import { Discord, Gmail, Instagram, Linkedin } from "simple-icons-astro";

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "aboutSection",
  },
  {
    label: "Venue",
    href: "locationInfoSection",
  },
  {
    label: "Sponsors",
    href: "sponsorSection",
  },
  {
    label: "FAQs",
    href: "faqsSection",
  },
  {
    label: "Team",
    href: "teamsSection",
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://discord.gg/wp42amwcWy",
    icon: Discord,
  },
  {
    href: "https://www.instagram.com/hackathoncanada/",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/hackathonscanada/",
    icon: Linkedin,
  },
  {
    href: "mailto:contact@hackcanada.org",
    icon: Gmail,
  },
];

export const footerCol1Links = [
  {
    label: "Apply as a Mentor",
    href: "",
  },
  {
    label: "Apply as a Judge",
    href: "",
  },
];

export const footerCol2Links = [
  {
    label: "Terms of Service",
    href: "",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Contact Us",
    href: "mailto:contact@hackcanada.org",
    blank: true,
  },
];
