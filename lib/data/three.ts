import {
  Shirt,
  Music,
  Briefcase,
  Calendar,
  Sticker,
  Circle,
  Send,
  FileCheck,
  Printer,
  PackageCheck,
} from "lucide-react";

import type {
  ThreeFaqItem,
  ThreeFeaturedCategory,
  ThreeFeaturedProject,
  ThreeProcessStep,
  ThreeService,
  ThreeTestimonial,
} from "@/lib/types/three";

export const THREE_SERVICES: ThreeService[] = [
  {
    icon: Shirt,
    title: "Screen Printing",
    description: "Tees, hoodies, long sleeves. All garments.",
  },
  {
    icon: Music,
    title: "Band / Tour Merch",
    description: "Built for the road. Durable ink. Fast turnaround.",
  },
  {
    icon: Briefcase,
    title: "Business / Brand Apparel",
    description: "Professional quality. Your brand, done right.",
  },
  {
    icon: Calendar,
    title: "Event Merch + Collabs",
    description: "Limited drops. Festival gear. Special releases.",
  },
  {
    icon: Sticker,
    title: "Stickers",
    description: "Die-cut stickers. Small runs available.",
  },
  {
    icon: Circle,
    title: "Buttons",
    description: "1-inch buttons. Perfect add-ons for any run.",
  },
];

export const THREE_FEATURED_PROJECTS: ThreeFeaturedProject[] = [
  {
    name: "OKHC Drop",
    category: "Drops",
    inkColors: "3-color",
    garment: "Tee",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Tour Tee 2024",
    category: "Bands",
    inkColors: "2-color",
    garment: "Tee",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Label Release",
    category: "Bands",
    inkColors: "4-color",
    garment: "Hoodie",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    name: "Festival Kit",
    category: "Events",
    inkColors: "White + Red",
    garment: "Tee",
    gradient: "from-pink-500/20 to-red-500/20",
  },
  {
    name: "Brand Uniform",
    category: "Brands",
    inkColors: "1-color",
    garment: "Long Sleeve",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "Hardcore Show",
    category: "Bands",
    inkColors: "Black + White",
    garment: "Tee",
    gradient: "from-gray-500/20 to-slate-500/20",
  },
  {
    name: "Pop-Up Drop",
    category: "Events",
    inkColors: "2-color",
    garment: "Hoodie",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    name: "Coffee Co.",
    category: "Brands",
    inkColors: "2-color",
    garment: "Tee",
    gradient: "from-amber-500/20 to-brown-500/20",
  },
  {
    name: "Summer Tour",
    category: "Bands",
    inkColors: "3-color",
    garment: "Tank",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export const THREE_FEATURED_CATEGORIES: ThreeFeaturedCategory[] = [
  "All",
  "Bands",
  "Brands",
  "Events",
  "Drops",
];

export const THREE_PROCESS_STEPS: ThreeProcessStep[] = [
  {
    number: "01",
    icon: Send,
    title: "Send Details",
    description: "Share your art, garment choice, and quantity.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Mockup + Quote",
    description: "Review proof and pricing. Approve to proceed.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Print + QC",
    description: "Print and quality-check every piece, every time.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Pickup / Shipping",
    description: "Local pickup in OKC or shipping nationwide.",
  },
];

export const THREE_FAQS: ThreeFaqItem[] = [
  {
    question: "What's your minimum order?",
    answer:
      "Minimums depend on the complexity of your print and garment type. Most runs start at 12-24 pieces. Rush orders or specialty prints may have different minimums. Send us your project details for an exact quote.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Standard turnaround is 7-10 business days from proof approval. Rush options are available when our schedule allows. Tour or event deadlines? Let us know ASAP and we'll do everything we can to make it work.",
  },
  {
    question: "Can you help clean up artwork?",
    answer:
      "Yes. We can convert low-res images to print-ready files, rebuild logos, and make adjustments. Complex design work may have an art fee. We'll let you know upfront if any cleanup is needed.",
  },
  {
    question: "What garments do you recommend?",
    answer:
      "We work with quality blanks from Gildan, Comfort Colors, Bella+Canvas, and more. We'll recommend garments based on your budget, style, and print. Need something specific? We can source it.",
  },
  {
    question: "Local pickup vs shipping?",
    answer:
      "Local pickup is free in Oklahoma City. We ship nationwide via USPS or UPS. Shipping costs depend on order size and destination. We'll include shipping estimates in your quote.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "We focus on printing, but we can recommend local designers and artists who specialize in merch graphics. Have an idea but no art? Let us know and we'll point you in the right direction.",
  },
];

export const THREE_TESTIMONIALS: ThreeTestimonial[] = [
  {
    quote:
      "Best print quality we've had. Backroom handled our entire tour run with zero issues. Communication was fast and the prints held up through 30+ shows.",
    author: "Jake Morrison",
    role: "Vocalist, Dead End Youth",
  },
  {
    quote:
      "Needed 200 hoodies for a pop-up in 10 days. They made it happen. Quality was perfect and the team kept us updated the whole time.",
    author: "Sarah Chen",
    role: "Creative Director, OKC Collective",
  },
  {
    quote:
      "We run all our label merch through Backroom. Consistent quality, fast replies, and they actually understand what bands need.",
    author: "Marcus Wright",
    role: "Owner, Concrete Records",
  },
];

export const THREE_PRICING_POINTS = [
  "Minimums depend on print complexity & garment type",
  "Bulk discounts available for larger runs",
  "Rush options when timeline allows",
  "Transparent pricing - no surprise fees",
];
