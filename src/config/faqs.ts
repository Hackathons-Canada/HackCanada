import { type FaqCategory } from "@/types/faqs";

// TODO: Update with real data
const faqs: FaqCategory[] = [
  {
    type: "General",
    faqs: [
      {
        question: "What is Hack Canada?",
        answer:
          "Hack Canada is a student-run hackathon where students from across the country gather to create, innovate, and learn new tech skills. Whether you're a coding expert or just getting started, everyone is welcome!",
      },
      {
        question: "What is a hackathon?",
        answer:
          "A hackathon is an event where people come together to build something awesome, usually over the course of a weekend. Teams collaborate on tech projects, and at the end, you get to show off what you've built. Think of it as a coding marathon—but with more snacks and less running.",
      },
      {
        question: "What if I've never been to a hackathon before?",
        answer:
          "Perfect! Hackathons are a great place to start. You'll learn a ton, meet cool people, and get plenty of help along the way. No experience needed—just bring your enthusiasm, and we'll help with the rest.",
      },
      {
        question: "What if I don't know how to code?",
        answer:
          "No problem! Hackathons are all about learning. Whether you want to start coding or explore other roles like design or project management, there's something for everyone. Plus, coding wizards will be around to help you conjure up some code magic.",
      },
      {
        question: "What if I don't have a team?",
        answer:
          "Don't worry! We'll have team-building activities to help you find your squad. If you're still solo, we'll pair you up with others in the same boat. Collaboration is the key to hackathons, and we'll make sure you're part of the fun.",
      },
    ],
  },
  {
    type: "Registration",
    faqs: [
      {
        question: "Who can participate?",
        answer:
          "Any student, high school or above, is welcome to participate! Whether you're still in school or have recently graduated, this is your chance to shine. Bring your ideas and creativity—we'll provide the rest.",
      },
      {
        question: "When do hacker applications open?",
        answer:
          "Applications open soon! Keep an eye on our website and social media for announcements. And don't worry, no need for cosmic alignments—just stay tuned for the launch date!",
      },
      {
        question: "How do I register?",
        answer:
          "You can register on our website. All you'll need is some basic information and a government-issued ID to verify your eligibility. Easy, right?",
      },
    ],
  },
  {
    type: "Logistics",
    faqs: [
      {
        question: "How much does it cost to attend Hack Canada?",
        answer:
          "It's completely free! All you need to bring is your energy and ideas. We've got everything else covered—food, swag, and plenty of caffeine!",
      },
      {
        question: "What documents do I need to apply?",
        answer:
          "All we need is a government-issued ID. No need to dig up obscure family records or ancient scrolls. Just something that proves you're you!",
      },
      {
        question: "Will food be provided?",
        answer:
          "Absolutely! We'll make sure you're well-fed throughout the event with a variety of meals and snacks. We've even got you covered for those late-night coding cravings!",
      },
      {
        question: "What should I bring to the event?",
        answer:
          "Bring your laptop, charger, and whatever gadgets you need to be productive. Don't forget a good pair of headphones and maybe a comfy hoodie for the long haul. Oh, and a thirst for innovation!",
      },
    ],
  },
  {
    type: "Code of Conduct",
    faqs: [
      {
        question: "What is the code of conduct?",
        answer:
          "Be respectful, be kind, and be inclusive. We're here to create a safe, welcoming environment for everyone, so let's make sure we treat each other well and have fun!",
      },
      {
        question: "Who can I contact for code of conduct concerns?",
        answer:
          "If you have any concerns, feel free to reach out to one of the event organizers. We're here to listen and help resolve any issues swiftly and fairly.",
      },
      {
        question: "How can I report a violation?",
        answer:
          "You can report violations confidentially to any organizer in person or via discord. We'll handle the situation promptly and professionally.",
      },
    ],
  },
];

export default faqs;
