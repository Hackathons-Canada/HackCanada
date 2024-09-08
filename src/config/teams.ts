import { teamMembers } from "@/config/teamMembers";
import type { Team } from "@/types/teams";

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
