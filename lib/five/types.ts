export type WorkProject = { name: string; tags: string[] };

export type PackageTier = {
  title: string;
  items: string[];
  variant?: "outline" | "default";
  featured?: boolean;
};

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  body: string;
}

export interface ProcessSteps {
  n: string;
  title: string;
  body: string;
}

export interface ProductTypes {
  value: string;
  label: string;
}

export interface PrintLocations {
  id: string;
  label: string;
}
