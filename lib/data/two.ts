import { Shirt, Music, Building2, Calendar, Package } from "lucide-react";
import { FileImage, CheckCircle2, Printer, Truck } from "lucide-react";

import type {
  TwoFaqItem,
  TwoGalleryFilter,
  TwoGalleryProject,
  TwoProcessStep,
  TwoService,
} from "@/lib/types/two";

export const TWO_SERVICES: TwoService[] = [
  {
    icon: Shirt,
    title: "Screen Printing",
    description: "Tees, hoodies, long sleeves. Clean prints on quality blanks.",
  },
  {
    icon: Music,
    title: "Band / Tour Merch",
    description: "Drops, tours, releases. We get the deadlines.",
  },
  {
    icon: Building2,
    title: "Business / Brand Apparel",
    description: "Team gear, branded apparel. Small or bulk.",
  },
  {
    icon: Calendar,
    title: "Event Merch + Collabs",
    description: "One-off events, limited runs, special projects.",
  },
  {
    icon: Package,
    title: "Extras Available",
    description: "Stickers, buttons, small run accessories.",
  },
];

export const TWO_PROCESS_STEPS: TwoProcessStep[] = [
  {
    number: "1",
    icon: FileImage,
    title: "Send Details",
    description: "Art, garment type, quantity, and any deadlines.",
  },
  {
    number: "2",
    icon: CheckCircle2,
    title: "Approve Mockup",
    description: "Review the proof and get your quote.",
  },
  {
    number: "3",
    icon: Printer,
    title: "Print + QC",
    description: "We print and quality-check every piece.",
  },
  {
    number: "4",
    icon: Truck,
    title: "Pickup/Ship",
    description: "Local pickup in OKC or nationwide shipping.",
  },
];

export const TWO_FAQS: TwoFaqItem[] = [
  {
    question: "What's your minimum order?",
    answer:
      "Minimums vary based on print complexity and garment type. Typically we can work with runs as small as 12-24 pieces. Contact us with your project details for specific minimums.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Standard turnaround is 10-14 business days from approved artwork. Rush options available depending on our schedule and print complexity. Tour deadlines? Let us know upfront.",
  },
  {
    question: "Can you help clean up artwork?",
    answer:
      "Yes. We can make basic adjustments, convert artwork to print-ready files, and suggest improvements. Complex design work may require additional fees, but we'll always let you know upfront.",
  },
  {
    question: "What garments do you recommend?",
    answer:
      "We work with quality blanks from brands like Gildan Heavy Cotton, Comfort Colors, Independent Trading Co., and premium options. We'll recommend the best fit for your budget and aesthetic.",
  },
  {
    question: "Local pickup vs shipping?",
    answer:
      "Based in Oklahoma City - local pickup is free. We also ship nationwide. Shipping costs depend on quantity and destination. We'll include shipping estimates in your quote.",
  },
];

export const TWO_GALLERY_PROJECTS: TwoGalleryProject[] = [
  {
    name: "OKHC Drop",
    inkColors: "3-color",
    garment: "Tee",
    type: "drops",
  },
  {
    name: "Tour Tee 2024",
    inkColors: "2-color",
    garment: "Tee",
    type: "bands",
  },
  {
    name: "Label Release",
    inkColors: "4-color",
    garment: "Hoodie",
    type: "bands",
  },
  {
    name: "Brand Capsule",
    inkColors: "White + red",
    garment: "Long sleeve",
    type: "brands",
  },
  {
    name: "Festival Collab",
    inkColors: "2-color",
    garment: "Tee",
    type: "events",
  },
  {
    name: "Hardcore Night",
    inkColors: "White ink",
    garment: "Hoodie",
    type: "events",
  },
  {
    name: "Street Drop",
    inkColors: "3-color",
    garment: "Tee",
    type: "drops",
  },
  {
    name: "Local Band Merch",
    inkColors: "2-color",
    garment: "Tee",
    type: "bands",
  },
  {
    name: "Brand Launch",
    inkColors: "Black + gold",
    garment: "Hoodie",
    type: "brands",
  },
];

export const TWO_GALLERY_FILTERS: TwoGalleryFilter[] = [
  { label: "All", value: "all" },
  { label: "Bands", value: "bands" },
  { label: "Brands", value: "brands" },
  { label: "Events", value: "events" },
  { label: "Drops", value: "drops" },
];
