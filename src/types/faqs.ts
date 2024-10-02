type FaqEntry = {
  question: string;
  answer: string;
};
type FaqCategories =
  | "General"
  | "Registration"
  | "Logistics"
  | "Code of Conduct";

export type FaqCategory = {
  type: FaqCategories;
  faqs: FaqEntry[];
};
