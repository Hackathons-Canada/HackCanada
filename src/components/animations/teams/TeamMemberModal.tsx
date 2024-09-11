"use client";

import { useEffect, useRef, useCallback } from "react";
import { useStore } from "@nanostores/react";
import { selectedMember, clearSelectedMember } from "@/stores/memberStore";

export default function TeamMemberModal() {
  const member = useStore(selectedMember);
  const modalRef = useRef(null);

  const handleClose = useCallback(() => {
    clearSelectedMember();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (member) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, handleClose]);

  if (!member) return null;

  const { firstName, lastName, tag, quote, image } = member;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex items-start space-x-4">
          <div
            className="h-16 w-16 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image || "/teamAvatars/default-avatar.webp"})`,
            }}
          />
          <div className="flex-1">
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              {`${firstName} ${lastName || ""}`}
            </h2>
            <p className="text-sm text-gray-400">{tag}</p>
          </div>
        </div>
        <p className="mt-4 text-lg italic text-gray-300">{`"${quote}"`}</p>
      </div>
    </div>
  );
}
