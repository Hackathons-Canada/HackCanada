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
  // Tier 1
  {
    name: "Google",
    value: 4,
    website: "https://about.google/",
    logoUrl: "/sponsors/companies/google.png",
    description:
      "Organizing the world's information to make it universally accessible and useful.",
  },
  {
    name: "NEAR",
    value: 4,
    website: "https://near.org/",
    logoUrl: "/sponsors/companies/near.png",
    description:
      "The climate-neutral blockchain built for real-world adoption.",
  },
  {
    name: "Avalanche",
    value: 4,
    website: "https://www.avax.network/",
    logoUrl: "/sponsors/companies/avalanche.png",
    description:
      "The fastest smart contracts platform in the blockchain industry.",
  },
  {
    name: "Orkes",
    value: 4,
    website: "https://www.orkes.io/",
    logoUrl: "/sponsors/companies/orkes.png",
    description: "Empowering seamless workflows with intelligent automation.",
  },

  // Tier 2
  {
    name: "ICP",
    value: 2,
    website: "https://internetcomputer.org/",
    logoUrl: "/sponsors/companies/ICP.svg",
    description:
      "The Internet Computer hosts secure, network-resident code and data.",
  },
  {
    name: "PCBWay",
    value: 2,
    website: "https://www.pcbway.com/",
    logoUrl: "/sponsors/companies/pcbway.png",
    description: "Professional PCB manufacturer and assembly services.",
  },
  {
    name: "Spur",
    value: 2,
    website: "https://spuric.com/",
    logoUrl: "/sponsors/companies/spur.svg",
    description:
      "SPUR INNOVATORS with the best resourceS • community • support",
  },
  {
    name: "Konfer",
    value: 2,
    website: "https://konfer.ca/",
    logoUrl: "/sponsors/companies/konfer.png",
    description: "A premier consultancy based in Canada.",
  },

  // Tier 3
  {
    name: "1Password",
    value: 1,
    website: "https://1password.com/",
    logoUrl: "/sponsors/companies/1password.png",
    description: "The world's most-loved password manager.",
  },
  {
    name: "NordVPN",
    value: 1,
    website: "https://nordsecurity.com/",
    logoUrl: "/sponsors/companies/nordvpn.png",
    description: "Digital security and privacy solutions for everyone.",
  },
  {
    name: "AWS Club",
    value: 1,
    website: "https://aws.amazon.com/",
    logoUrl: "/sponsors/companies/aws.webp",
    description: "Amazon Web Services student community.",
  },
  {
    name: "Perplexity AI",
    value: 1,
    website: "https://www.perplexity.ai/",
    logoUrl: "/sponsors/companies/perplexity.png",
    description:
      "A Free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.",
  },
  {
    name: "Warp",
    value: 1,
    website: "https://www.warp.dev/",
    logoUrl: "/sponsors/companies/warp.png",
    description: "The terminal for the 21st century.",
  },
  {
    name: "Dora Hacks",
    value: 1,
    website: "https://dorahacks.io/home",
    logoUrl: "/sponsors/companies/dorahacks.png",
    description:
      "Explore the world of innovation and connect hackers around the world via BUIDLs, hackathons, and more",
  },
  {
    name: "Taskade",
    value: 1,
    website: "https://www.taskade.com/",
    logoUrl: "/sponsors/companies/taskade.png",
    description:
      "Real-time organization and collaboration tool for remote teams.",
  },
  {
    name: "Kitchener Screen Printing",
    value: 2,
    website: "https://kitchenerscreenprinting.com/",
    logoUrl: "/sponsors/companies/ksp.png",
    description:
      "Kitchener Screen Printing specialize in screen printing, t-shirt printing, direct to garment t-shirts, vinyl, embroidery of team and corporate apparel",
  },
  {
    name: "AoPS",
    value: 1,
    website: "https://artofproblemsolving.com/",
    logoUrl: "/sponsors/companies/aops.png",
    description: "The leader in math education for high-performing students",
  },
  {
    name: "XYZ",
    value: 1,
    website: "https://gen.xyz/",
    logoUrl: "/sponsors/companies/xyz.png",
    description:
      "The most popular new domain for the next generation of internet users",
  },
  {
    name: "JamHacks",
    value: 1,
    website: "https://jamhacks.ca/",
    logoUrl: "/sponsors/companies/jamhacks.png",
    description: "Waterloo Region's Largest High School Hackathon",
  },
  {
    name: "Hack the 6ix",
    value: 1,
    website: "https://hackthe6ix.com/",
    logoUrl: "/sponsors/companies/ht6.png",
    description: "Toronto's Largest Summer Hackathon",
  },
  {
    name: "GenAI Genesis",
    value: 1,
    website: "https://genaigenesis.ca/",
    logoUrl: "/sponsors/companies/genai.png",
    description: "Empowering the next generation of AI innovation",
  },
];
