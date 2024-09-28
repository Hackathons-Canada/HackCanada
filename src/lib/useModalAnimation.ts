import { useRef, useCallback } from "react";
import gsap from "gsap";

export function useModalAnimation(clearSelectedMember: () => void) {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    gsap.to(bgRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: clearSelectedMember,
    });
  }, [clearSelectedMember]);

  const animateIn = useCallback(() => {
    if (typeof window !== "undefined" && contentRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const animateInElements =
        contentRef.current.querySelectorAll(".animate-in");

      tl.fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
      ).fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3 },
        "-=0.1",
      );

      if (animateInElements.length > 0) {
        tl.fromTo(
          animateInElements,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
          "-=0.2",
        );
      }
    }
  }, []);

  return { bgRef, contentRef, handleClose, animateIn };
}
