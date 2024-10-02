import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface BaseAnimationOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
  end?: string;
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

const validateSelector = (s: string): void => {
  if (!s.trim())
    throw new Error("Invalid selector: must be a non-empty string");
};

const createAnimation = (
  s: string,
  f: gsap.TweenVars,
  t: gsap.TweenVars,
  o: BaseAnimationOptions,
): gsap.core.Tween => {
  validateSelector(s);
  const {
    inView = true,
    start = "top bottom-=100",
    end = "bottom top+=100",
    animateEachTime = false,
  } = o;
  const w = gsap.fromTo(s, f, t);

  if (inView) {
    ScrollTrigger.create({
      trigger: s,
      start,
      end,
      toggleActions: animateEachTime
        ? "play reverse play reverse"
        : "play none none none",
      animation: w,
    });
  }

  return w;
};

export const initGsapFade = (
  s: string,
  o: FadeOptions = {},
): gsap.core.Tween => {
  const {
    duration = 1,
    ease = "power3.out",
    delay = 0,
    direction = "up",
    distance = 50,
  } = o;
  const f: gsap.TweenVars = {
    opacity: 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
  };
  const t: gsap.TweenVars = { opacity: 1, x: 0, y: 0, duration, ease, delay };

  return createAnimation(s, f, t, o);
};

export const initGsapPopup = (
  s: string,
  o: PopupOptions = {},
): gsap.core.Tween => {
  const { duration = 0.8, ease = "back.out(1.7)", delay = 0, y = 70 } = o;
  const f: gsap.TweenVars = { opacity: 0, y };
  const t: gsap.TweenVars = { opacity: 1, y: 0, duration, ease, delay };

  return createAnimation(s, f, t, o);
};
