import type { LucideIcon } from "lucide-react";

export type TwoService = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TwoProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TwoFaqItem = {
  question: string;
  answer: string;
};

export type TwoGalleryCategory =
  | "all"
  | "bands"
  | "brands"
  | "events"
  | "drops";

export type TwoGalleryProject = {
  name: string;
  inkColors: string;
  garment: string;
  type: TwoGalleryCategory;
};

export type TwoGalleryFilter = {
  label: string;
  value: TwoGalleryCategory;
};
