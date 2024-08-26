export type FaqEntry = {
  question: string;
  answer: string;
};
export enum FaqCategories {
  General = "General",
  Registration = "Registration",
  Logistics = "Logistics",
  CodeOfConduct = "Code of Conduct",
}

export type FaqCategory = {
  type: FaqCategories;
  faqs: FaqEntry[];
};
