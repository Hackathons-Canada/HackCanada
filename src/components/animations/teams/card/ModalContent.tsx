import React from "react";
import type { TeamMember } from "@/types/teams";
import { LinkSection } from "./LinkSection";

type ModalContentProps = {
  member: TeamMember;
  contentRef: React.RefObject<HTMLDivElement>;
};

export function ModalContent({ member, contentRef }: ModalContentProps) {
  const { firstName, lastName, tag, quote, image, links } = member;

  return (
    <div
      ref={contentRef}
      className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl focus:outline-none md:w-[400px]"
      onClick={(e) => e.stopPropagation()}
      tabIndex={-1}
    >
      <div className="flex items-center space-x-4">
        <img
          src={image || "/teamAvatars/default-avatar.webp"}
          srcSet={image || "/teamAvatars/default-avatar.webp"}
          sizes="(max-width: 768px) 64px, 80px"
          alt={`${firstName} ${lastName || ""}`}
          className="size-16 rounded-full object-cover animate-in md:size-20"
          loading="lazy"
        />
        <div className="flex-1 animate-in">
          <h2 id="modal-title" className="text-2xl font-bold text-white">
            {`${firstName} ${lastName || ""}`}
          </h2>
          <p className="text-sm text-gray-400">{tag}</p>
        </div>
        <LinkSection links={links} firstName={firstName} />
      </div>
      <p className="mt-4 text-lg italic text-gray-300 animate-in">{quote}</p>
    </div>
  );
}
