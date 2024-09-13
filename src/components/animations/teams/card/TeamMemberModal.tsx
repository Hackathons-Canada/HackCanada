import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedMember, clearSelectedMember } from "@/stores/memberStore";
import { ModalContent } from "./ModalContent";
import { useModalAnimation } from "./useModalAnimation";

export default function TeamMemberModal() {
  const member = useStore(selectedMember);
  const { bgRef, contentRef, handleClose, animateIn } =
    useModalAnimation(clearSelectedMember);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (member) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
      animateIn();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, handleClose, animateIn]);

  if (!member) return null;

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <ModalContent member={member} contentRef={contentRef} />
    </div>
  );
}
