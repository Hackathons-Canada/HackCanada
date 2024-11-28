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
    "Premier Event Hosted by Hackathons Canada the biggest hacker community in canada of 3000+ hackers",
  url: "https://staging.hackcanada.org",

  og: {
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "600",
    url: "/opengraph-image.png",
  },
  twitter: "@hackcanada",
  favicon: {
    href: "/favicon.svg",
    type: "image/svg+xml",
  },
};

export const heroSection = {
  title: "Hack Canada",
  tagline: "Feb 21–23, 2024 @ Lazaridis Hall, Wilfrid Laurier University",
  buttonText: "Hacker Application",
  buttonLink: "/",
};

export const aboutSection = {
  title: "Who Are We?",
  descriptions: [
    parseMarkdown(
      "Hack Canada is [Hackathons Canada's](https://hackathonscanada.com) first annual event, inviting hackers of all ages and skill levels from Canada and beyond to solve pressing challenges with technology. We bring together innovative minds to connect, create, and collaborate in an exciting environment.",
    ),
    parseMarkdown(
      "Join us from February 21st to 23rd for hands-on workshops, expert mentorship, and fun activities designed to spark creativity and grow your skills. Enjoy cool swag, prizes, new connections, and lifelong memories as we shape a brighter future for Canada through innovation.",
    ),
  ],
};

export const locationSection = {
  tag: "Save the Date",
  eventName: "Tech Innovators Summit",
  details: [
    {
      title: "Overview",
      description:
        "Be part of the Tech Innovators Summit where developers, designers, and tech enthusiasts come together to create the next big thing.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Venue",
      description: "456 Startup Lane, Innovation Park, IP 67890",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Event Dates",
      description: "November 20-22, 2024<br>10:00 AM - 5:00 PM daily",
      image: null,
    },
    {
      title: "Map & Directions",
      description: "Easily find your way to the venue",
      image:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164939!2d-73.98823492346994!3d40.74844097138798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686977881642!5m2!1sen!2sus",
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
