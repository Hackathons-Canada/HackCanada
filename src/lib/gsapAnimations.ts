import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface BaseAnimationOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
  end?: string; // New property
  inView?: boolean;
  animateEachTime?: boolean;
}

interface FadeOptions extends BaseAnimationOptions {
  direction?: Direction;
  distance?: number;
}

interface PopupOptions extends BaseAnimationOptions {
  y?: number;
}

interface BounceOptions extends BaseAnimationOptions {
  height?: number;
  squash?: number;
}

function validateSelector(selector: string): void {
  if (typeof selector !== "string" || selector.trim() === "") {
    throw new Error("Invalid selector: must be a non-empty string");
  }
}

function createAnimation(
  selector: string,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  options: BaseAnimationOptions,
): gsap.core.Tween {
  validateSelector(selector);

  const {
    inView = true,
    start = "top bottom-=100",
    end = "bottom top+=100", // New default end value
    animateEachTime = false,
  } = options;

  const tween = gsap.fromTo(selector, from, to);

  if (inView) {
    ScrollTrigger.create({
      trigger: selector,
      start: start,
      end: end,
      toggleActions: animateEachTime
        ? "play reverse play reverse"
        : "play none none none",
      animation: tween,
    });
  }

  return tween;
}

function createTimelineAnimation(
  selector: string,
  timeline: gsap.core.Timeline,
  options: BaseAnimationOptions,
): gsap.core.Timeline {
  validateSelector(selector);

  const {
    inView = true,
    start = "top bottom-=100",
    end = "bottom top+=100", // New default end value
    animateEachTime = false,
  } = options;

  if (inView) {
    ScrollTrigger.create({
      trigger: selector,
      start: start,
      end: end,
      toggleActions: animateEachTime
        ? "play reverse play reverse"
        : "play none none none",
      animation: timeline,
    });
  }

  return timeline;
}

export function initGsapFade(
  selector: string,
  options: FadeOptions = {},
): gsap.core.Tween {
  const {
    duration = 1,
    ease = "power3.out",
    delay = 0,
    direction = "up",
    distance = 50,
  } = options;

  const from: gsap.TweenVars = {
    opacity: 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
  };

  const to: gsap.TweenVars = {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    ease,
    delay,
  };

  return createAnimation(selector, from, to, options);
}

export function initGsapPopup(
  selector: string,
  options: PopupOptions = {},
): gsap.core.Tween {
  const { duration = 0.5, ease = "back.out(1.7)", delay = 0, y = 70 } = options;

  const from: gsap.TweenVars = {
    opacity: 0,
    y,
  };

  const to: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration,
    ease,
    delay,
  };

  return createAnimation(selector, from, to, options);
}

export function initGsapBounceUp(
  selector: string,
  options: BounceOptions = {},
): gsap.core.Timeline {
  const {
    duration = 0.8,
    ease = "bounce.out",
    delay = 0,
    height = 100,
    squash = 0.8,
  } = options;

  const timeline = gsap.timeline({ delay });

  timeline
    .from(selector, {
      y: height,
      opacity: 0,
      duration: duration * 0.5,
      ease: "power2.in",
    })
    .to(selector, {
      y: 0,
      scaleY: squash,
      scaleX: 1 / squash,
      opacity: 1,
      duration: duration * 0.25,
      ease: "power2.out",
    })
    .to(selector, {
      scaleY: 1,
      scaleX: 1,
      duration: duration * 0.25,
      ease,
    });

  return createTimelineAnimation(selector, timeline, options);
}
