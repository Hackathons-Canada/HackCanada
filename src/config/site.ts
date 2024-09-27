import { marked } from "marked";

/** USAGE EXAMPLE
 * import Prose from "@/components/utility/Prose.astro";
 *
 * <Prose
 * className=''
 * set:html={aboutSection.description} />
 * **/

const parseMarkdown = (text: string) => marked.parseInline(text);

export const siteConfig = {
  title: "HackCanada",
  description:
    "The largest hackathon in Canada. With over 3000+ hackers and 300+ sponsors, we aim to bring together the best hackers from around the world to create projects that will push forward the world of technology!",
  url: "https://hackcanada.org",
  meta: {
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
  },
  og: {
    type: "website",
    image: "https://hackcanada.org/banner.png",
  },
  twitter: {
    card: "summary_large_image",
    image: "https://hackcanada.org/banner.png",
  },
  icons: {
    favicon: {
      href: "/favicon.svg",
      type: "image/x-icon",
      sizes: "16x16",
    },
  },
};

export const heroSection = {
  title: "Hack Canada",
  tagline: "Feb 30-32, 2025 | In-Person Event | Unofficial MLH Partner",
  buttonText: "Hacker Application",
  buttonLink: "/",
};

export const aboutSection = {
  title: "Who Are We?",
  descriptions: [
    parseMarkdown(
      "Hack Canada is the premier event organized by [Hackathons Canada](https://hackathonscanada.com). It's where the brightest minds gather to push the limits of innovation—because who needs sleep when you have code to write? Expect 36 hours of creativity, collaboration, and the occasional 'I-just-fixed-it' dance.",
    ),
    parseMarkdown(
      "At Hack Canada, our motto is simple: have fun, make something awesome, and maybe even catch a nap between all the brilliance.",
    ),
  ],
};

export const locationSection = {
  tag: "Yep, it's happening",
  collegeName: "Laurier University",
  cards: [
    {
      title: "Event Details",
      description:
        "Join us for an exciting event at Laurier University. Don't miss out on this opportunity!",
      image: null,
    },
    {
      title: "Location",
      description: "75 University Ave W, Waterloo, ON N2L 3C5",
      image: "/api/placeholder/400/200",
    },
    {
      title: "Schedule",
      description:
        "Check out our event schedule and plan your day accordingly.",
      image: null,
    },
  ],
};

export const faqsSection = {
  title: "Frequently Asked Questions",
};

export const teamSection = {
  title: "Meet Our Team",
  tagline: parseMarkdown(
    "[@hackcanada](/) / [@hackathonscanada](https://hackathonscanada.com)",
  ),
  placeholder: "/teamAvatars/default-avatar.webp",
};
