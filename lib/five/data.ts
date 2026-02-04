import type {
  FaqItem,
  NavItem,
  ServiceItem,
  ProcessSteps,
  ProductTypes,
  PrintLocations,
} from "./types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the minimum order?",
    answer:
      "Our minimum order is typically 25 pieces. For rush jobs or complex designs, minimums may vary. Contact us for specific details.",
  },
  {
    question: "What is the typical turnaround?",
    answer:
      "Standard turnaround is 10-14 business days after proof approval. Rush options are available for tighter deadlines.",
  },
  {
    question: "Can you help with artwork?",
    answer:
      "Absolutely. We offer design assistance and can help refine your ideas into print-ready artwork. Additional design fees may apply.",
  },
  {
    question: "Pickup vs shipping?",
    answer:
      "Local Oklahoma City pickup is free. We also ship nationwide with rates based on quantity and destination.",
  },
  {
    question: "What are the best garments?",
    answer:
      "We work with trusted brands like Gildan, Bella+Canvas, Next Level, and Comfort Colors. We will recommend the best option based on your budget and use case.",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "packages", label: "Packages" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Screen Printing",
    body: "High-quality screen prints with vibrant colors and durability.",
  },
  {
    title: "Tour / Event Merch",
    body: "Fast turnaround for bands, tours, and live event merchandise.",
  },
  {
    title: "Brand Apparel",
    body: "Professional branding for businesses and organizations.",
  },
  {
    title: "Stickers + Extras",
    body: "Custom stickers, patches, and additional print products.",
  },
];

export const PROCESS_STEPS: ProcessSteps[] = [
  {
    n: "01",
    title: "Submit details",
    body: "Fill out the quote form with your project specifications",
  },
  {
    n: "02",
    title: "Proof approval",
    body: "Review and approve digital mockups of your design",
  },
  {
    n: "03",
    title: "Print + QC",
    body: "We print and quality check every piece",
  },
  {
    n: "04",
    title: "Pickup/Ship",
    body: "Local pickup in OKC or nationwide shipping",
  },
];

export const PRODUCT_TYPES: ProductTypes[] = [
  { value: "tshirt", label: "T-Shirt" },
  { value: "hoodie", label: "Hoodie" },
  { value: "longsleeve", label: "Long Sleeve" },
  { value: "crewneck", label: "Crewneck" },
  { value: "tank", label: "Tank Top" },
  { value: "other", label: "Other" },
];

export const PRINT_LOCATIONS: PrintLocations[] = [
  { id: "front", label: "Front" },
  { id: "back", label: "Back" },
  { id: "sleeve", label: "Sleeve" },
  { id: "chest", label: "Chest" },
];

export const QUOTE_CHECKLIST = [
  "Garment type",
  "Quantity needed",
  "Number of colors",
  "Project deadline",
];
