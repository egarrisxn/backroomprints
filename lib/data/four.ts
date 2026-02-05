import {
  Sparkles,
  Palette,
  Package as PackageIcon,
  Sticker,
} from "lucide-react";

import type {
  NavItem,
  Service,
  GalleryItem,
  Package,
  ProcessStep,
  FaqItem,
} from "@/lib/types/four";

export const NAV_ITEMS: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "packages", label: "Packages" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const HERO_BG_VARIANTS = {
  wire: "/transparent-background-0.png",
  block: "/transparent-background-1.png",
  script: "/transparent-background-2.png",
} as const;

export const services: Service[] = [
  {
    icon: Sparkles,
    title: "Screen Printing",
    description: "Premium prints on tees, hoodies, and long sleeves.",
  },
  {
    icon: Palette,
    title: "Tour / Event Merch",
    description: "Durable merch built for the road and the crowd.",
  },
  {
    icon: PackageIcon,
    title: "Brand Apparel",
    description: "Elevate your brand with custom apparel.",
  },
  {
    icon: Sticker,
    title: "Stickers + Extras",
    description: "Die-cut stickers, patches, and more.",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Tour Hoodie",
    tags: ["3-color", "front+back", "hoodie"],
    category: "bands",
  },
  { title: "Brand Tee", tags: ["2-color", "front", "tee"], category: "brands" },
  {
    title: "Event Long Sleeve",
    tags: ["4-color", "sleeve", "long-sleeve"],
    category: "events",
  },
  {
    title: "Die-Cut Stickers",
    tags: ["full-color", "vinyl"],
    category: "accessories",
  },
  {
    title: "Festival Drop",
    tags: ["3-color", "front+back", "tee"],
    category: "events",
  },
  {
    title: "Merch Pack",
    tags: ["2-color", "front", "hoodie"],
    category: "bands",
  },
];

export const packages: Package[] = [
  {
    title: "Starter Run",
    description: "Perfect for testing designs or limited drops.",
    features: [
      "Small batch printing",
      "Up to 3 colors",
      "Standard turnaround",
      "Local pickup available",
    ],
    popular: false,
  },
  {
    title: "Drop Ready",
    description: "Most popular option for bands and brands.",
    features: [
      "Medium to large runs",
      "Up to 6 colors",
      "Priority turnaround",
      "Nationwide shipping",
    ],
    popular: true,
  },
  {
    title: "Tour Pack",
    description: "Bulk orders with placement flexibility.",
    features: [
      "Bulk pricing",
      "Unlimited colors",
      "Rush available",
      "Direct-to-venue shipping",
    ],
    popular: false,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Send Details",
    description: "Fill out the quote form with your project details",
  },
  {
    step: "02",
    title: "Approve Proof",
    description: "Review and approve your design mockup",
  },
  {
    step: "03",
    title: "Print + QC",
    description: "We print and quality-check every item",
  },
  {
    step: "04",
    title: "Pickup/Ship",
    description: "Choose local pickup or nationwide shipping",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What are your minimums?",
    answer:
      "Minimums vary by product and print complexity. Typically 12-24 pieces for screen printing. Contact us for specifics.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Standard turnaround is 10-14 business days after proof approval. Rush options available for tight deadlines.",
  },
  {
    question: "Do you help with artwork?",
    answer:
      "Yes! We can help refine designs for print or create simple layouts. Full design services available for an additional fee.",
  },
  {
    question: "Pickup vs shipping?",
    answer:
      "We offer free local pickup in Oklahoma City. Nationwide shipping is available with rates calculated at checkout.",
  },
  {
    question: "What garments do you recommend?",
    answer:
      "We work with high-quality blanks from brands like Gildan, Comfort Colors, and Bella+Canvas. We can source specific requests.",
  },
];

export const HERO_ITEMS = [
  "Soft-hand inks",
  "Multi-color prints",
  "Small + bulk runs",
  "Pickup / Shipping",
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
