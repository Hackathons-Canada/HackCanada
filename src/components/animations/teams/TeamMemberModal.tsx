"use client";

import { useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedMember, clearSelectedMember } from "@/stores/memberStore";
import { Globe } from "lucide-react";
import gsap from "gsap";

export default function TeamMemberModal() {
  const member = useStore(selectedMember);
  // const modalRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClose = useCallback(() => {
    gsap.to(bgRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: clearSelectedMember,
    });
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

  useLayoutEffect(() => {
    if (member) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          contentRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 },
          "-=0.1",
        )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2",
        )
        .fromTo(
          imageRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 },
          "-=0.2",
        )
        .fromTo(
          quoteRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2",
        )
        .fromTo(
          buttonRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 },
          "-=0.2",
        );
    }
  }, [member]);

  if (!member) return null;

  const { firstName, lastName, tag, quote, image, link } = member;

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="w-[350px] rounded-3xl bg-amber-950 p-6 shadow-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="flex items-start space-x-4">
          <div
            ref={imageRef}
            className="h-16 w-16 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image || "/teamAvatars/default-avatar.webp"})`,
            }}
          />
          <div ref={textRef} className="flex-1">
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              {`${firstName} ${lastName || ""}`}
            </h2>
            <p className="text-sm text-gray-400">{tag}</p>
          </div>
          <button
            ref={buttonRef}
            className="rounded-full bg-amber-900 bg-opacity-50 p-2 text-gray-300 hover:bg-opacity-100 hover:text-yellow-400 hover:shadow-lg"
            onClick={() => window.open(link, "_blank")}
            aria-label={`Visit ${firstName}'s profile`}
          >
            <Globe className="h-7 w-7" />
          </button>
        </div>
        <p
          ref={quoteRef}
          className="mt-4 text-lg italic text-gray-300"
        >{`${quote}`}</p>
      </div>
    </div>
  );
}
