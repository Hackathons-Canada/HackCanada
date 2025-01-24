import type { Sponsor } from "@/types/sponsors";

export const sponsorConfig = {
  heading: "Our Sponsors",
  description: [
    "Be a part of an extraordinary journey to host Canada's greatest hackathon.",
    "Your contribution is sweeter than even the richest maple syrup.",
  ],
  sponsorText: {
    text: "BECOME A SPONSOR",
    buttonText: "Get in Touch",
    buttonClassName:
      "bg-yellow-100 text-slate-700 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-500 rounded-md py-2 px-4 transition duration-200 ",
    email: "sponsor@hackcanada.org", //change this or wtv
    altText: "🚀Sponsors to be announced soon!🚀",
  },
};

export const sponsorsInfo: Sponsor[] = [
  {
    name: "Google",
    value: 4,
    website: "https://about.google/",
    logoUrl: "/sponsors/companies/google.png?height=100&width=300",
    description:
      "Organizing the world's information to make it universally accessible and useful.",
  },
  {
    name: "Orkes",
    value: 4,
    website: "https://www.orkes.io/",
    logoUrl: "/sponsors/companies/orkes.png?height=90&width=300",
    description: "Empowering seamless workflows with intelligent automation.",
  },
  {
    name: "Spur",
    value: 2,
    website: "https://spuric.com/",
    logoUrl: "/sponsors/companies/spur.svg?height=100&width=300",
    description:
      "SPUR INNOVATORS with the best resourceS • community • support",
  },
  {
    name: "ICP",
    value: 2,
    website: "https://internetcomputer.org/",
    logoUrl: "/sponsors/companies/ICP.svg?height=100&width=300",
    description:
      "The Internet Computer hosts secure, network-resident code and data.",
  },
  {
    name: "Konfer",
    value: 2,
    website: "https://konfer.ca/",
    logoUrl: "/sponsors/companies/konfer.png?height=100&width=300",
    description: "A premier consultancy based in Canada.",
  },
  {
    name: "Kitchener Screen Printing",
    value: 2,
    website: "https://kitchenerscreenprinting.com/",
    logoUrl: "/sponsors/companies/ksp.png?height=100&width=300",
    description:
      "Kitchener Screen Printing specialize in screen printing, t-shirt printing, direct to garment t-shirts, vinyl, embroidery of team and corporate apparel",
  },
  {
    name: "Perplexity AI",
    value: 1,
    website: "https://www.perplexity.ai/hub/careers",
    logoUrl: "/sponsors/companies/perplexity.png?height=100&width=300",
    description:
      "A Free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.",
  },
  {
    name: "Dora Hacks",
    value: 1,
    website: "https://dorahacks.io/home",
    logoUrl: "/sponsors/companies/dorahacks.png?height=100&width=300",
    description:
      "Explore the world of innovation and connect hackers around the world via BUIDLs, hackathons, and more",
  },
];
