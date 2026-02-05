import type { LucideIcon } from "lucide-react";

export type HeroBgVariant = "wire" | "block" | "script";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  tags: string[];
  category: "bands" | "brands" | "events" | "accessories";
};

export type Package = {
  title: string;
  description: string;
  features: string[];
  popular: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export interface NavItem {
  id: string;
  label: string;
}

export type FaqItem = {
  question: string;
  answer: string;
};
