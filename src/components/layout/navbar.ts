import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navbar = document.querySelector(".navbar-animation");
const dropdown = document.querySelector("#mobileDropdown");
let isDropdownOpen = false;

const runInitialAnimation = () => {
  if (!navbar) return;

  const tl = gsap.timeline();
  tl.fromTo(
    navbar,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  )
    .fromTo(
      ".logo-animation",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4",
    )
    .fromTo(
      ".nav-link-animation",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3",
    )
    .fromTo(
      ".social-icon-animation",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    );

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      if (!dropdown?.classList.contains("hidden")) return;
      gsap.to(navbar, {
        y: self.direction === 1 && self.getVelocity() > 50 ? -100 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
  });
};

const toggleDropdown = () => {
  if (!dropdown) return;

  const tl = gsap.timeline();
  if (isDropdownOpen) {
    tl.to(dropdown.querySelectorAll(".socialLink, .navlink"), {
      opacity: 0,
      y: 10,
      stagger: { each: 0.05, from: "end" },
      duration: 0.2,
      ease: "power2.in",
    }).to(dropdown, {
      height: 0,
      duration: 0.1,
      ease: "linear",
      onComplete: () => dropdown.classList.add("hidden"),
    });
  } else {
    dropdown.classList.remove("hidden");
    tl.fromTo(
      dropdown,
      { height: 0 },
      { height: "auto", duration: 0.1, ease: "linear" },
    ).fromTo(
      dropdown.querySelectorAll(".navlink, .socialLink"),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: { each: 0.05, from: "start" },
        duration: 0.2,
        ease: "power2.out",
      },
    );
  }
  isDropdownOpen = !isDropdownOpen;
  document.querySelectorAll(".menu-line").forEach((line, index) => {
    line.classList.toggle(index === 0 ? "rotate-[405deg]" : "-rotate-[405deg]");
    line.classList.toggle(
      index === 0 ? "translate-y-[5.5px]" : "-translate-y-[5.5px]",
    );
  });
};

const initializeNavbar = () => {
  if (document.readyState === "complete") runInitialAnimation();
  else window.addEventListener("load", runInitialAnimation);
  document.addEventListener("astro:after-swap", runInitialAnimation);

  window.handleScrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isDropdownOpen) toggleDropdown();
    }
  };

  document
    .querySelector("#dropdownToggle")
    ?.addEventListener("click", toggleDropdown);
  ScrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const navbarBg = document.querySelector(".navbar-bg");
      if (navbarBg) {
        gsap.to(navbarBg, {
          backgroundColor: `rgba(255, 255, 255, ${0.3 + self.progress * 0.4})`,
          duration: 0.3,
        });
      }
    },
  });
};

document.addEventListener("DOMContentLoaded", initializeNavbar);
