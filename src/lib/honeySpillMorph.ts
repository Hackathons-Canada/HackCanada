import anime from "animejs";
export const initialPoints =
  "M0 0s-3 0 56 0c57 0 49 0 74 0 15 0 32 0 56 0s37 0 58 0c19 0 18 0 54 0 31 0 32 0 45 0 8 0 18 0 31 0 16 0 16 0 30 0S418 0 433 0s15 0 36 0c20 0-4 0 33 0 40 0 20 0 40 0 10 0 20 0 45 0 29 0 37 0 55 0 13 0 28 0 48 0 28 0 36 0 52 0 28 0 18 0 66 0C844 0 871 0 871 0";
export const finalPoints =
  "M0 0s-3 106 47 112c57 6 49-66 74-73 15-4 32 27 56 27s37-22 58-27c19-4 18 73 54 73 31 0 32-63 45-73 8-7 18 5 31 3 16-3 16-7 30-10S418 61 433 62s15-26 36-24c20 2-4 62 33 63 40 1 20-46 40-57 10-5 20 37 45 36 29-2 37-41 55-43 13-2 28 22 48 21 28-1 36-31 52-32 28-2 18 71 66 72C844 100 871 4 871 4";

export default function animateSVG(
  direction?: "normal" | "reverse",
  duration?: number,
) {
  const path = document.querySelector("#morphingSvg path");
  anime({
    targets: path,
    d: [{ value: initialPoints }, { value: finalPoints }],
    duration: duration || 2500,
    easing: "easeOutCubic",
    direction: direction || "normal",
  });
}
