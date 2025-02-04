import { Discord, Gmail, Instagram, Linkedin } from "@/lib/icon-library";

interface SocialLink {
  href: string;
  // eslint-disable-next-line
  icon: (props: { size: number; color: string; className?: string }) => string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { href: "https://discord.gg/wp42amwcWy", icon: Discord, label: "Discord" },
  {
    href: "https://www.instagram.com/hackathoncanada/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/hackathonscanada/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:contact@hackcanada.org", icon: Gmail, label: "Email" },
];

export const footerLinksRow1 = [
  {
    label: "Apply as a Mentor",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScCS76RX3C1AvGGFOQ5J69XpoYb6rvdYQ-B0aYxS_GLaf4jmQ/viewform?usp=sf_link",
  },
  {
    label: "Apply as a Judge",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScCS76RX3C1AvGGFOQ5J69XpoYb6rvdYQ-B0aYxS_GLaf4jmQ/viewform?usp=sf_link",
  },
];

export const footerLinksRow2 = [
  { label: "Code Of Conduct", href: "" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "mailto:contact@hackcanada.org", blank: true },
];

export const navLinks = [
  { label: "About", href: "aboutSection" },
  // { label: "Venue", href: "locationInfoSection" },
  { label: "Sponsors", href: "sponsorSection" },
  { label: "FAQs", href: "faqsSection" },
  { label: "Team", href: "teamsSection" },
];
