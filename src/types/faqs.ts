export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqCategories =
  | "General"
  | "Registration"
  | "Logistics"
  | "Code of Conduct";

export type FaqCategory = {
  type: FaqCategories;
  faqs: FaqEntry[];
};
