export const sponsorConfig = {
  heading: "Our Sponsors",
  description: [
    "Be a part of an extraordinary journey to host Canada's top hackathon.",
    "Your contribution will be more valued than the richest maple syrup.",
  ],
  sponsorText: {
    text: "BECOME A SPONSOR",
    buttonText: "Get in Touch",
    buttonClassName:
      "bg-yellow-100 text-slate-700 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-500 rounded-md py-2 px-4 transition duration-200 ",
    email: "sponsor@hackcanada.org", //change this or wtv
    altText: "🚀Sponsors to be announced Soon!🚀",
  },
};

export interface Sponsor {
  name: string;
  value: 1 | 2 | 3 | 4;
  website: string;
  logoUrl: string;
  description: string;
}

export const sponsorsInfo: Sponsor[] = [];
