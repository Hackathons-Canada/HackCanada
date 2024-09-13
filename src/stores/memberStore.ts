import { atom } from "nanostores";
import type { TeamMember } from "@/types/teams";

export const selectedMember = atom<TeamMember | null>(null);

export function selectMember(member: TeamMember) {
  selectedMember.set(member);
}

export function clearSelectedMember() {
  selectedMember.set(null);
}
