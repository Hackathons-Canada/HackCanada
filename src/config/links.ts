import type { NavLink, SocialLink } from "@/types";

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
    icon: "/icons/discord.svg",
    iconV2: "/icons/discord-footer.svg",
  },
  {
    href: "https://www.instagram.com/hackathoncanada/",
    icon: "/icons/instagram.svg",
    iconV2: "/icons/ig-footer.svg",
  },
  {
    href: "https://www.linkedin.com/company/hackathonscanada/",
    icon: "/icons/linkedin.svg",
    iconV2: "/icons/linkedin-footer.svg",
  },
  {
    href: "mailto:contact@hackcanada.org",
    icon: "/icons/mail.svg",
    iconV2: "/icons/gmail-footer.svg",
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
