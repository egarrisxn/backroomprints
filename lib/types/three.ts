import type { LucideIcon } from "lucide-react";

export type ThreeService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ThreeFeaturedCategory =
  | "All"
  | "Bands"
  | "Brands"
  | "Events"
  | "Drops";

export type ThreeFeaturedProject = {
  name: string;
  category: ThreeFeaturedCategory;
  inkColors: string;
  garment: string;
  gradient: string;
};

export type ThreeProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ThreeFaqItem = {
  question: string;
  answer: string;
};

export type ThreeTestimonial = {
  quote: string;
  author: string;
  role: string;
};
