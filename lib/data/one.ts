import type {
  OneFeaturedProject,
  OneNavLink,
  OneProcessStep,
  OneService,
} from "@/lib/types/one";

export const ONE_NAV_LINKS: OneNavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const ONE_SERVICES: OneService[] = [
  {
    title: "Custom Merch",
    description:
      "T-shirts, hoodies, hats, and more. Perfect for bands, artists, and brands looking to create quality merchandise.",
  },
  {
    title: "Posters & Prints",
    description:
      "Concert posters, art prints, promotional materials. High-quality printing on premium paper stock.",
  },
  {
    title: "Album Artwork",
    description:
      "Vinyl covers, CD packaging, digital artwork printing. We understand the music industry's unique needs.",
  },
  {
    title: "Promotional Materials",
    description:
      "Flyers, business cards, stickers, and banners. Make your brand stand out with professional printing.",
  },
  {
    title: "Custom Projects",
    description:
      "Have something unique in mind? We love working on special projects and bringing creative ideas to life.",
  },
  {
    title: "Bulk Orders",
    description:
      "Volume discounts available for large orders. Perfect for tours, events, and product launches.",
  },
];

export const ONE_FEATURED_PROJECTS: OneFeaturedProject[] = [
  {
    title: "Band Merch Collection",
    category: "Custom Apparel",
    description:
      "Complete merchandise line for local band including t-shirts, hoodies, and limited edition prints.",
  },
  {
    title: "Album Release Campaign",
    category: "Promotional Materials",
    description:
      "Posters, flyers, and promotional materials for a successful album launch event.",
  },
  {
    title: "Artist Collaboration",
    category: "Art Prints",
    description:
      "Limited edition art prints series featuring work from OKC-based visual artists.",
  },
  {
    title: "Festival Merchandise",
    category: "Event Merch",
    description:
      "Full merchandise suite for multi-day music festival including apparel and accessories.",
  },
];

export const ONE_PROCESS_STEPS: OneProcessStep[] = [
  {
    number: "1",
    title: "Consultation",
    description:
      "Share your vision with us. We'll discuss your project, timeline, and budget to ensure we're aligned.",
  },
  {
    number: "2",
    title: "Design & Proof",
    description:
      "We'll prepare mockups and samples for your approval. Revisions included to get it perfect.",
  },
  {
    number: "3",
    title: "Production",
    description:
      "Your project goes into production with quality checks at every step. Fast turnaround guaranteed.",
  },
];
