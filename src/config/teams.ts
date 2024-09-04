// import type { Team, TeamMember } from "@/types/teams";

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
  // TeamA members
  {
    name: "Alice",
    image: "/images/alice.jpg",
    team: "TeamA",
    tag: "Developer",
    link: "https://alice-portfolio.com",
    quote: "Coding is my superpower!",
  },
  {
    name: "Bob",
    image: "/images/bob.jpg",
    team: "TeamA",
    tag: "Designer",
    link: "https://twitter.com/bob_designs",
    quote: "Design is not just what it looks like, it's how it works.",
  },
  {
    name: "Charlie",
    image: "/images/charlie.jpg",
    team: "TeamA",
    tag: "Product Manager",
    link: "https://linkedin.com/in/charlie-pm",
    quote: "Turning ideas into reality, one sprint at a time.",
  },

  // TeamB members

  {
    name: "David",
    image: "/images/david.jpg",
    team: "TeamB",
    tag: "Frontend Developer",
    link: "https://david-portfolio.com",
    quote: "Creating seamless user experiences through code.",
  },
  {
    name: "David",
    image: "/images/david.jpg",
    team: "TeamB",
    tag: "Frontend Developer",
    link: "https://david-portfolio.com",
    quote: "Creating seamless user experiences through code.",
  },
  {
    name: "David",
    image: "/images/david.jpg",
    team: "TeamB",
    tag: "Frontend Developer",
    link: "https://david-portfolio.com",
    quote: "Creating seamless user experiences through code.",
  },
  {
    name: "David",
    image: "/images/david.jpg",
    team: "TeamB",
    tag: "Frontend Developer",
    link: "https://david-portfolio.com",
    quote: "Creating seamless user experiences through code.",
  },
  {
    name: "Eva",
    image: "/images/eva.jpg",
    team: "TeamB",
    tag: "Backend Developer",
    link: "https://github.com/eva-dev",
    quote: "Building robust systems from the ground up.",
  },
  {
    name: "Frank",
    image: "/images/frank.jpg",
    team: "TeamB",
    tag: "UX Researcher",
    link: "https://medium.com/@frank_ux",
    quote: "Understanding users is the key to great design.",
  },
  {
    name: "Grace",
    image: "/images/grace.jpg",
    team: "TeamB",
    tag: "Data Scientist",
    link: "https://kaggle.com/grace_data",
    quote: "Finding patterns in the noise.",
  },
  {
    name: "Henry",
    image: "/images/henry.jpg",
    team: "TeamB",
    tag: "DevOps Engineer",
    link: "https://henry-devops.tech",
    quote: "Automating the world, one script at a time.",
  },
  {
    name: "Ivy",
    image: "/images/ivy.jpg",
    team: "TeamB",
    tag: "Quality Assurance",
    link: "https://linkedin.com/in/ivy-qa",
    quote: "Quality is not an act, it's a habit.",
  },
];

export const teams: Team[] = [
  {
    teamName: "TeamA",
    teamMembers: teamMembers.filter((member) => member.team === "TeamA"),
  },
  {
    teamName: "TeamB",
    teamMembers: teamMembers.filter((member) => member.team === "TeamB"),
  },
];
