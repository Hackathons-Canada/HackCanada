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
