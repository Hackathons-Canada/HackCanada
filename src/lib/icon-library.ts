// usage in .Astro code
// ---
// import { Github } from '@/lib/icon-library';
// ---

// <div>
//   <Span set:html={Github({ size: 32, color: "#333" })} />
//   <span>GitHub</span>
// </div>

// usage in .tsx code

// import React from 'react';
// import { Github } from '@/lib/icon-library';

// const GitHubIcon: React.FC = () => (
//   <div>
//     <div dangerouslySetInnerHTML={{ __html: Github({ size: 32, color: "#333" }) }} />
//     <span>GitHub</span>
//   </div>
// );

// export default GitHubIcon;

type IconName =
  | "Discord"
  | "Github"
  | "Globe"
  | "Gmail"
  | "Instagram"
  | "Linkedin"
  | "Sparkles";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  fill?: boolean;
}

const iconPaths: Record<
  Lowercase<IconName>,
  { path: string; viewBox: string; defaultFill: boolean }
> = {
  discord: {
    path: "M41.6 10.8A22 22 0 0031.1 7a1 1 0 00-1 .6l-.3.8a26 26 0 018.8 3.2 1 1 0 11-1 1.7 25.8 25.8 0 00-25.1 0 1 1 0 01-1-1.7 26 26 0 018.7-3.2l-.3-.8a1 1 0 00-1-.6 22 22 0 00-10.6 3.8 45.4 45.4 0 00-6.2 23.7c3 5.1 10.9 6.4 12.7 6.5.3 0 .6-.2.8-.4l1.8-2.5a15.1 15.1 0 01-7.5-3.6 1 1 0 011.3-1.5s4.7 4 13.8 4 13.8-4 13.8-4a1 1 0 011.3 1.5 15.1 15.1 0 01-7.5 3.6l1.8 2.5c.2.2.5.4.8.4 1.8-.1 9.8-1.4 12.8-6.5A45 45 0 0041.6 10.8zM18.5 30a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm13 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",
    viewBox: "0 0 50 50",
    defaultFill: true,
  },
  github: {
    path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5 0-1.3-.3-2.5-1-3.5.3-1.1.3-2.4 0-3.5 0 0-1 0-3 1.5-2.6-.5-5.4-.5-8 0C6 2 5 2 5 2a7 7 0 0 0 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.7 4.7 0 0 0 9 18v4 M9 18c-4.5 2-5-2-7-2",
    viewBox: "0 0 24 24",
    defaultFill: false,
  },
  globe: {
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 0a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20M2 12h20",
    viewBox: "0 0 24 24",
    defaultFill: false,
  },
  gmail: {
    path: "M12 23V10L9 8C7 7 5 8 4 9s-2 2-2 4v3l10 7zm26 0 10-7v-4c0-1-1-3-2-4s-3-2-5-1l-3 2v14zm-24 2 10 8h2l10-8V12l-11 8-11-8v13zm24 1v15c0 1 0 1 1 1h7c1 0 2-1 2-3V19l-10 7zm-26 0L2 19v21c0 2 1 3 3 3h6c1 0 1-1 1-1V26z",
    viewBox: "0 0 50 50",
    defaultFill: true,
  },
  instagram: {
    path: "M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4zm1.5-4.9h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
    viewBox: "0 0 24 24",
    defaultFill: false,
  },
  linkedin: {
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    viewBox: "0 0 24 24",
    defaultFill: false,
  },
  sparkles: {
    path: "M10 15.5a2 2 0 0 0-1.5-1.4l-6.1-1.6a.5.5 0 0 1 0-1L8.5 10a2 2 0 0 0 1.4-1.4l1.6-6.1a.5.5 0 0 1 1 0l1.5 6a2 2 0 0 0 1.4 1.4l6.1 1.6a.5.5 0 0 1 0 1l-6 1.5a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0zM20 3v4m2-2h-4M4 17v2m1-1H3",
    viewBox: "0 0 24 24",
    defaultFill: false,
  },
};

const createIconComponent =
  (name: Lowercase<IconName>) =>
  ({
    size = 24,
    color = "currentColor",
    className = "",
    fill,
  }: IconProps = {}): string => {
    const isFilled = fill ?? iconPaths[name].defaultFill;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" 
      fill="${isFilled ? color : "none"}"
      stroke="${isFilled ? "none" : color}"
      stroke-width="${isFilled ? "0" : "2"}"
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="${className}" 
      viewBox="${iconPaths[name].viewBox}">
        <path d="${iconPaths[name].path}"/>
    </svg>`;
  };

export const Discord = createIconComponent("discord");
export const Github = createIconComponent("github");
export const Globe = createIconComponent("globe");
export const Gmail = createIconComponent("gmail");
export const Instagram = createIconComponent("instagram");
export const Linkedin = createIconComponent("linkedin");
export const Sparkles = createIconComponent("sparkles");

// If you still want to export all icons as a single object, you can do:
export const Icons = {
  Discord,
  Github,
  Globe,
  Gmail,
  Instagram,
  Linkedin,
  Sparkles,
};
