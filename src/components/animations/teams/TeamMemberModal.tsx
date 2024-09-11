"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { selectedMember, clearSelectedMember } from "@/stores/memberStore";
import { Globe } from "lucide-react";

export default function TeamMemberModal() {
  const member = useStore(selectedMember);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (member && dialog && !dialog.open) {
      dialog.showModal();
    } else if (!member && dialog && dialog.open) {
      dialog.close();
    }
  }, [member]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      clearSelectedMember();
    };
    dialog?.addEventListener("cancel", handleCancel);
    return () => dialog?.removeEventListener("cancel", handleCancel);
  }, []);

  if (!member) return null;

  return (
    <dialog
      ref={dialogRef}
      className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl backdrop:bg-black backdrop:bg-opacity-50"
      onClick={(e) => {
        if (e.target === dialogRef.current) clearSelectedMember();
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className="h-16 w-16 rounded-full"
            style={{
              backgroundImage: `url(${member.image || "/teamAvatars/default-avatar.webp"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="h-fit w-fit text-yellow-500">
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <h2 id="modal-title" className="text-2xl font-bold text-white">
            {`${member.firstName} ${member.lastName || ""}`}
          </h2>
          <p className="text-sm text-gray-400">{member.tag}</p>
          <div className="mt-4">
            <p className="text-lg italic text-gray-300">{`${member.quote}`}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
