import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface AnimationOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
  start?: string;
  selector?: string;
}

interface FadeOptions extends AnimationOptions {
  direction?: Direction;
  distance?: number;
}

interface PopupOptions extends AnimationOptions {
  y?: number;
  x?: number;
}

interface BounceOptions extends AnimationOptions {
  height?: number;
  squash?: number;
}

export function initGsapFade(options: FadeOptions = {}): void {
  const {
    duration = 1,
    ease = "power3.out",
    delay = 0,
    stagger = 0.2,
    start = "top bottom-=100",
    direction = "up",
    distance = 50,
    selector = ".gsapFade",
  } = options;

  const fadeElements = document.querySelectorAll(selector);

  fadeElements.forEach((element: Element, index: number) => {
    const from = {
      opacity: 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    };

    const to = {
      opacity: 1,
      x: 0,
      y: 0,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: start,
      },
      delay: delay + index * stagger,
    };

    gsap.fromTo(element, from, to);
  });
}

export function initGsapPopup(options: PopupOptions = {}): void {
  const {
    duration = 0.5,
    ease = "back.out(1.7)",
    delay = 0,
    stagger = 0.1,
    y = 70,
    start = "top bottom-=100",
    selector = ".gsapPopup",
  } = options;

  const popupElements = document.querySelectorAll(selector);

  popupElements.forEach((element: Element, index: number) => {
    const from = {
      opacity: 0,
      y: y,
    };

    const to = {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: start,
      },
      delay: delay + index * stagger,
    };

    gsap.fromTo(element, from, to);
  });
}

export function initGsapBounceUp(options: BounceOptions = {}): void {
  const {
    duration = 0.8,
    ease = "bounce.out",
    delay = 0,
    stagger = 0.2,
    start = "top bottom-=100",
    height = 100,
    squash = 0.8,
    selector = ".gsapBounceUp",
  } = options;

  const bounceElements = document.querySelectorAll(selector);

  bounceElements.forEach((element: Element, index: number) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: start,
      },
      delay: delay + index * stagger,
    });

    timeline
      .from(element, {
        y: height,
        opacity: 0,
        duration: duration * 0.5,
        ease: "power2.in",
      })
      .to(element, {
        y: 0,
        scaleY: squash,
        scaleX: 1 / squash,
        opacity: 1,
        duration: duration * 0.25,
        ease: "power2.out",
      })
      .to(element, {
        scaleY: 1,
        scaleX: 1,
        duration: duration * 0.25,
        ease: ease,
      });
  });
}
