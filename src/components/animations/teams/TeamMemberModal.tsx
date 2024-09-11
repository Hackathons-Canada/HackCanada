"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { selectedMember, clearSelectedMember } from "@/stores/memberStore";

export default function TeamMemberModal() {
  const member = useStore(selectedMember);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && member) {
        clearSelectedMember();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [member]);

  useEffect(() => {
    if (member) {
      document.body.classList.add("overflow-hidden");
      modalRef.current?.focus();
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [member]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={() => clearSelectedMember()}
    >
      <div
        ref={modalRef}
        className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex items-start space-x-4">
          <div
            className="h-16 w-16 rounded-full"
            style={{
              backgroundImage: `url(${member.image || "/teamAvatars/default-avatar.webp"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex-1">
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              {`${member.firstName} ${member.lastName || ""}`}
            </h2>
            <p className="text-sm text-gray-400">{member.tag}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg italic text-gray-300">{`"${member.quote}"`}</p>
        </div>
      </div>
    </div>
  );
}
