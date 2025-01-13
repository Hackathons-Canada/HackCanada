export type TeamName =
  | "Admin"
  | "Tech"
  | "Design"
  | "Outreach"
  | "Finance"
  | "Logistics"
  | "Marketing"
  | "Mentor";

export interface TeamMember {
  firstName: string;
  lastName?: string;
  image?: string;
  pronouns?: string;
  team: TeamName;
  tag: string;
  links: string[];
  quote: string;
}

export interface Team {
  teamName: string;
  teamMembers: TeamMember[];
}
