import { type FaqCategory } from "@/types/faqs";

const faqs: FaqCategory[] = [
  {
    type: "General",
    faqs: [
      {
        question: "What is Hack Canada?",
        answer:
          "Hack Canada is a student-run hackathon that aims to bring together students from across Canada to collaborate on projects and learn new skills. We welcome students of all skill levels to participate in our event.",
      },

      {
        question: "What is a hackathon?",
        answer: "",
      },

      {
        question: "Who can participate?",
        answer: "",
      },

      {
        question: "What if I’ve never been to a hackathon before?",
        answer: "",
      },

      {
        question: "What if I don’t know how to code?",
        answer: "",
      },

      {
        question: "What if I don’t have a team?",
        answer: "",
      },
    ],
  },
  {
    type: "Registration",
    faqs: [
      {
        question: "When do hacker applications open?",
        answer: "",
      },
    ],
  },
  {
    type: "Logistics",
    faqs: [
      {
        question: "Will Hack Canada 2025 happen in person or virtually?",
        answer: "",
      },
      {
        question: "How much does it cost to attend Hack Canada?",
        answer: "",
      },
    ],
  },
  {
    type: "Code of Conduct",
    faqs: [],
  },
];

export default faqs;
