import { InstagramIcon } from "@/components/six/icons/instagram";
import { TwitterIcon } from "@/components/six/icons/twitter";
import { EmailIcon } from "@/components/six/icons/email";
import type { HyperLink } from "./types";

export const navLinks: HyperLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const prototypes = [
  {
    href: "/one",
    title: "Prototype 1",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
  {
    href: "/two",
    title: "Prototype 2",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
  {
    href: "/three",
    title: "Prototype 3",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
  {
    href: "/four",
    title: "Prototype 4",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
  {
    href: "/five",
    title: "Prototype 5",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
  {
    href: "/six",
    title: "Prototype 6",
    subtitle: "TBD",
    description: "TBD",
    badge: "TBD",
  },
];

export const socialData = [
  {
    id: "instagram",
    title: "Instagram",
    username: "BackroomPrints",
    href: "https://www.instagram.com/backroomprints",
    Icon: InstagramIcon,
  },
  {
    id: "x",
    title: "X",
    username: "BackroomPrints",
    href: "https://x.com/BackroomPrints",
    Icon: TwitterIcon,
  },
  {
    id: "email",
    title: "Email",
    username: "BackroomPrints",
    href: "mailto:BackroomPrintsOKC@gmail.com",
    Icon: EmailIcon,
  },
];

// export const navLinks: HyperLink[] = [
//   { href: "#", label: "About Us" },
//   { href: "#", label: "Services" },
//   { href: "#", label: "Get a Quote" },
//   { href: "#", label: "Our Work" },
//   { href: "#", label: "FAQ'S" },
//   { href: "#", label: "Contact" },
// ];
