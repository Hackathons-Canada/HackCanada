import React from "react";
import { Github, Linkedin, Globe } from "@/lib/icon-library";

const getLinkIcon = (link: string) => {
  if (link.includes("github.com")) return Github;
  if (link.includes("linkedin.com")) return Linkedin;
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
  if (!props.links) return null;

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
            <div
              dangerouslySetInnerHTML={{
                __html: LinkIcon({ size: 24, color: "currentColor" }),
              }}
            />
          </a>
        );
      })}
    </>
  );
};
