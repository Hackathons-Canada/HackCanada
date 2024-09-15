import React from "react";
import type { TeamMember } from "@/types/teams";
import { Globe } from "lucide-react";
// import { Linkedin, Github } from 'simple-icons-astro';
import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";

const getLinkIcon = (link: string) => {
  if (link.includes("github.com")) return SiGithub;
  if (link.includes("linkedin.com")) return SiLinkedin;
  return Globe;
};

const getLinkType = (link: string) => {
  if (link.includes("github.com")) return "GitHub";
  if (link.includes("linkedin.com")) return "LinkedIn";
  return "profile";
};

type ModalContentProps = {
  member: TeamMember;
  contentRef: React.RefObject<HTMLDivElement>;
};

export function ModalContent({ member, contentRef }: ModalContentProps) {
  const { firstName, lastName, tag, quote, image, link } = member;
  const LinkIcon = getLinkIcon(link);
  const linkType = getLinkType(link);

  return (
    <div
      ref={contentRef}
      className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl focus:outline-none"
      onClick={(e) => e.stopPropagation()}
      tabIndex={-1}
    >
      <div className="flex items-center space-x-4">
        <div
          className="h-16 w-16 rounded-full bg-cover bg-center animate-in"
          style={{
            backgroundImage: `url(${image || "/teamAvatars/default-avatar.webp"})`,
          }}
        />
        <div className="flex-1 animate-in">
          <h2 id="modal-title" className="text-2xl font-bold text-white">
            {`${firstName} ${lastName || ""}`}
          </h2>
          <p className="text-sm text-gray-400">{tag}</p>
        </div>
        <button
          className="rounded-full bg-amber-900 bg-opacity-50 p-2 text-gray-300 animate-in hover:bg-opacity-100 hover:text-yellow-400 hover:shadow-lg"
          onClick={() => window.open(link, "_blank")}
          aria-label={`Visit ${firstName}'s ${linkType} profile`}
        >
          <LinkIcon width={24} />
        </button>
      </div>
      <p className="mt-4 text-lg italic text-gray-300 animate-in">{quote}</p>
    </div>
  );
}
