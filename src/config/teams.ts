export interface TeamMember {
  name: string;
  image: string;
  team: string;
  tag: string;
  link: string;
  quote: string;
}

export interface Team {
  teamName: string;
  teamMembers: TeamMember[];
}

export const teamMembers: TeamMember[] = [
  // Admin team
  {
    name: "William",
    image: "/teamAvatars/william.webp",
    team: "Admin",
    tag: "Admin Member",
    link: "https://example.com/william",
    quote: "Placeholder quote",
  },
  {
    name: "James",
    image: "/teamAvatars/james.webp",
    team: "Admin",
    tag: "Admin Member",
    link: "https://example.com/james",
    quote: "Placeholder quote",
  },
  {
    name: "Jerry",
    image: "/teamAvatars/jerry.webp",
    team: "Admin",
    tag: "Admin Member",
    link: "https://example.com/jerry",
    quote: "Placeholder quote",
  },

  // Mentor team
  {
    name: "Nausher",
    image: "/teamAvatars/nausher.webp",
    team: "Mentor",
    tag: "Mentor",
    link: "https://example.com/nausher",
    quote: "Placeholder quote",
  },
  {
    name: "Arnnav",
    image: "/teamAvatars/arnnav.webp",
    team: "Mentor",
    tag: "Mentor",
    link: "https://example.com/arnnav",
    quote: "Placeholder quote",
  },

  // Tech team
  {
    name: "Jason",
    image: "/teamAvatars/jason.webp",
    team: "Tech",
    tag: "Tech Lead",
    link: "https://example.com/jason",
    quote: "Placeholder quote",
  },
  {
    name: "Amol",
    image: "/teamAvatars/amol.webp",
    team: "Tech",
    tag: "Tech Lead",
    link: "https://example.com/amol",
    quote: "Placeholder quote",
  },
  {
    name: "Araf",
    image: "/teamAvatars/araf.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/araf",
    quote: "Placeholder quote",
  },
  {
    name: "Chirag",
    image: "/teamAvatars/chirag.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/chirag",
    quote: "Placeholder quote",
  },
  {
    name: "Sohel",
    image: "/teamAvatars/sohel.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/sohel",
    quote: "Placeholder quote",
  },
  {
    name: "Aayan",
    image: "/teamAvatars/aayan.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/aayan",
    quote: "Placeholder quote",
  },
  {
    name: "Aiden",
    image: "/teamAvatars/aiden.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/aiden",
    quote: "Placeholder quote",
  },
  {
    name: "Joudat",
    image: "/teamAvatars/joudat.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/joudat",
    quote: "Placeholder quote",
  },
  {
    name: "James",
    image: "/teamAvatars/james_l.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/james_l",
    quote: "Placeholder quote",
  },
  {
    name: "Fiona",
    image: "/teamAvatars/fiona.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/fiona",
    quote: "Placeholder quote",
  },
  {
    name: "Edem",
    image: "/teamAvatars/edem.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/edem",
    quote: "Placeholder quote",
  },
  {
    name: "Aryan",
    image: "/teamAvatars/aryan.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/aryan",
    quote: "Placeholder quote",
  },
  {
    name: "Wahib",
    image: "/teamAvatars/wahib.webp",
    team: "Tech",
    tag: "Tech Member",
    link: "https://example.com/wahib",
    quote: "Placeholder quote",
  },

  // Design team
  {
    name: "Jess",
    image: "/teamAvatars/jess.webp",
    team: "Design",
    tag: "Design Lead",
    link: "https://example.com/jess",
    quote: "Placeholder quote",
  },
  {
    name: "Julia",
    image: "/teamAvatars/julia.webp",
    team: "Design",
    tag: "Design Member",
    link: "https://example.com/julia",
    quote: "Placeholder quote",
  },
  {
    name: "Tina",
    image: "/teamAvatars/tina.webp",
    team: "Design",
    tag: "Design Member",
    link: "https://example.com/tina",
    quote: "Placeholder quote",
  },

  // Outreach team
  {
    name: "Nirek",
    image: "/teamAvatars/nirek.webp",
    team: "Outreach",
    tag: "Outreach Lead",
    link: "https://example.com/nirek",
    quote: "Placeholder quote",
  },
  {
    name: "Jad",
    image: "/teamAvatars/jad.webp",
    team: "Outreach",
    tag: "Outreach Member",
    link: "https://example.com/jad",
    quote: "Placeholder quote",
  },
  {
    name: "Greg",
    image: "/teamAvatars/greg.webp",
    team: "Outreach",
    tag: "Outreach Member",
    link: "https://example.com/greg",
    quote: "Placeholder quote",
  },
  {
    name: "Ray",
    image: "/teamAvatars/ray.webp",
    team: "Outreach",
    tag: "Outreach Member",
    link: "https://example.com/ray",
    quote: "Placeholder quote",
  },
  {
    name: "Tom",
    image: "/teamAvatars/tom.webp",
    team: "Outreach",
    tag: "Outreach Member",
    link: "https://example.com/tom",
    quote: "Placeholder quote",
  },

  // Finance team
  {
    name: "Uday",
    image: "/teamAvatars/uday.webp",
    team: "Finance",
    tag: "Finance Lead",
    link: "https://example.com/uday",
    quote: "Placeholder quote",
  },
  {
    name: "Derek",
    image: "/teamAvatars/derek.webp",
    team: "Finance",
    tag: "Finance Member",
    link: "https://example.com/derek",
    quote: "Placeholder quote",
  },
  {
    name: "Shayaan",
    image: "/teamAvatars/shayaan.webp",
    team: "Finance",
    tag: "Finance Member",
    link: "https://example.com/shayaan",
    quote: "Placeholder quote",
  },
  {
    name: "Sardaul",
    image: "/teamAvatars/sardaul.webp",
    team: "Finance",
    tag: "Finance Member",
    link: "https://example.com/sardaul",
    quote: "Placeholder quote",
  },

  // Logistics team
  {
    name: "Aayan",
    image: "/teamAvatars/aayan_l.webp",
    team: "Logistics",
    tag: "Logistics Lead",
    link: "https://example.com/aayan_l",
    quote: "Placeholder quote",
  },
  {
    name: "Emilo",
    image: "/teamAvatars/emilo.webp",
    team: "Logistics",
    tag: "Logistics Lead",
    link: "https://example.com/emilo",
    quote: "Placeholder quote",
  },
  {
    name: "Jia",
    image: "/teamAvatars/jia.webp",
    team: "Logistics",
    tag: "Logistics Member",
    link: "https://example.com/jia",
    quote: "Placeholder quote",
  },
  {
    name: "Yang",
    image: "/teamAvatars/yang.webp",
    team: "Logistics",
    tag: "Logistics Member",
    link: "https://example.com/yang",
    quote: "Placeholder quote",
  },
  {
    name: "Arnav",
    image: "/teamAvatars/arnav.webp",
    team: "Logistics",
    tag: "Logistics Member",
    link: "https://example.com/arnav",
    quote: "Placeholder quote",
  },
  {
    name: "Advaith",
    image: "/teamAvatars/advaith.webp",
    team: "Logistics",
    tag: "Logistics Member",
    link: "https://example.com/advaith",
    quote: "Placeholder quote",
  },
  {
    name: "Edward",
    image: "/teamAvatars/edward.webp",
    team: "Logistics",
    tag: "Logistics Member",
    link: "https://example.com/edward",
    quote: "Placeholder quote",
  },

  // Marketing team
  {
    name: "Chelsea",
    image: "/teamAvatars/chelsea.webp",
    team: "Marketing",
    tag: "Marketing Lead",
    link: "https://example.com/chelsea",
    quote: "Placeholder quote",
  },
  {
    name: "Ev",
    image: "/teamAvatars/ev.webp",
    team: "Marketing",
    tag: "Marketing Lead",
    link: "https://example.com/ev",
    quote: "Placeholder quote",
  },
  {
    name: "Yashas",
    image: "/teamAvatars/yashas.webp",
    team: "Marketing",
    tag: "Marketing Lead",
    link: "https://example.com/yashas",
    quote: "Placeholder quote",
  },
  {
    name: "Naman",
    image: "/teamAvatars/naman.webp",
    team: "Marketing",
    tag: "Marketing Member",
    link: "https://example.com/naman",
    quote: "Placeholder quote",
  },
  {
    name: "Anushka",
    image: "/teamAvatars/anushka.webp",
    team: "Marketing",
    tag: "Marketing Member",
    link: "https://example.com/anushka",
    quote: "Placeholder quote",
  },
  {
    name: "Claire",
    image: "/teamAvatars/claire.webp",
    team: "Marketing",
    tag: "Marketing Member",
    link: "https://example.com/claire",
    quote: "Placeholder quote",
  },
];

export const teams: Team[] = [
  {
    teamName: "Admin",
    teamMembers: teamMembers.filter((member) => member.team === "Admin"),
  },
  {
    teamName: "Mentor",
    teamMembers: teamMembers.filter((member) => member.team === "Mentor"),
  },
  {
    teamName: "Tech",
    teamMembers: teamMembers.filter((member) => member.team === "Tech"),
  },
  {
    teamName: "Design",
    teamMembers: teamMembers.filter((member) => member.team === "Design"),
  },
  {
    teamName: "Outreach",
    teamMembers: teamMembers.filter((member) => member.team === "Outreach"),
  },
  {
    teamName: "Finance",
    teamMembers: teamMembers.filter((member) => member.team === "Finance"),
  },
  {
    teamName: "Logistics",
    teamMembers: teamMembers.filter((member) => member.team === "Logistics"),
  },
  {
    teamName: "Marketing",
    teamMembers: teamMembers.filter((member) => member.team === "Marketing"),
  },
];
