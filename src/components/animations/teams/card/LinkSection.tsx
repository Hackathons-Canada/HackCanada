import React from "react";
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

interface LinkSectionProps {
  links: string[];
  firstName: string;
}

export const LinkSection = (props: LinkSectionProps) => {
  if (!props.links) return <></>;

  return (
    <>
      {props.links.map((link) => {
        const LinkIcon = getLinkIcon(link);
        return (
          <a
            key={link}
            className="rounded-full bg-amber-900 bg-opacity-50 p-2 text-gray-300 animate-in hover:bg-opacity-100 hover:text-yellow-400 hover:shadow-lg"
            target="_blank"
            rel="noreferrer noopener"
            href={link}
            aria-label={`Visit ${props.firstName}'s ${getLinkType(link)} profile`}
          >
            <LinkIcon width={24} />
          </a>
        );
      })}
    </>
  );
};
