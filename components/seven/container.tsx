"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Check,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Music,
  Package,
  Phone,
  Shirt,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ThemeToggle } from "@/components/theme-toggle";

type ServiceType = "apparel" | "promotional" | "artist_merch" | "other" | "";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service_type: ServiceType;
  message: string;
};

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service_type: "",
  message: "",
};

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const SERVICES = [
  {
    title: "Custom Apparel",
    description:
      "Premium screen printing and embroidery on t-shirts, hoodies, hats, and more",
    Icon: Shirt,
    items: [
      "Screen printing",
      "Direct-to-garment printing",
      "Embroidery services",
      "Bulk orders available",
    ],
  },
  {
    title: "Promotional Products",
    description:
      "Stand out with custom branded merchandise and marketing materials",
    Icon: Package,
    items: [
      "Business cards & flyers",
      "Banners & signage",
      "Stickers & decals",
      "Custom packaging",
    ],
  },
  {
    title: "Artist & Band Merch",
    description:
      "Specialized printing for musicians, artists, and creative professionals",
    Icon: Music,
    items: [
      "Album artwork printing",
      "Tour merchandise",
      "Posters & art prints",
      "Vinyl & CD packaging",
    ],
  },
] as const;

const PROJECTS = [
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
] as const;

const STEPS = [
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
] as const;

const REASONS = [
  {
    title: "Quality Materials",
    description: "Premium products that last",
  },
  {
    title: "Quick Turnaround",
    description: "Fast production without sacrificing quality",
  },
  {
    title: "Custom Solutions",
    description: "Every project is unique",
  },
  {
    title: "Local Service",
    description: "Supporting Oklahoma City businesses",
  },
] as const;

function ServiceCard({
  title,
  description,
  Icon,
  items,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  items: readonly string[];
}) {
  return (
    <Card className="border-2 transition hover:shadow-xl">
      <CardHeader>
        <div className="mb-4 flex size-16 items-center justify-center rounded-lg bg-slate-900">
          <Icon className="size-8 text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Container() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateField = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) => setFormData((prev) => ({ ...prev, [key]: value }));

  const resetForm = () => setFormData(INITIAL_FORM);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 800));

      console.log("Form submitted:", formData);

      setSubmitSuccess(true);
      resetForm();

      window.setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-tl from-white to-slate-100 dark:from-black dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background px-4 py-6 text-foreground shadow-lg">
        <div className="mx-auto flex max-w-352 items-center justify-between gap-16">
          <div className="flex items-center gap-0.5">
            <Image
              src="/logo.png"
              alt="Backroom Prints Logo"
              width={32}
              height={32}
              priority
            />
            <div className="text-2xl font-black -tracking-wider text-foreground">
              BACKROOM
              <span className="pl-0.5 font-extrabold -tracking-wide text-muted-foreground">
                PRINTS
              </span>
            </div>
          </div>

          <nav className="hidden flex-1 items-center gap-12 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground underline-offset-8 transition-colors hover:text-primary hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-foreground px-4 pt-24 pb-12 text-background md:pt-32 md:pb-20 xl:pt-40 xl:pb-40">
        <div className="mx-auto flex max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-balance md:text-6xl lg:text-7xl">
              Premium Printing for Artists & Creatives
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-pretty text-muted-foreground md:text-xl">
              From custom merch to bold posters, we transform your creative
              vision into tangible reality. Quality printing backed by years of
              experience in the music and creative industries.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="h-12 text-xl"
                asChild
              >
                <a href="#work">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-muted/30 px-4 py-12 md:py-20 xl:py-36 dark:bg-slate-950/90"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-balance md:text-5xl">
              What We Print
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Specialized in bringing your creative projects to life with
              premium quality materials and attention to detail.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-foreground px-4 py-12 text-background md:py-20 xl:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                About Backroom Prints
              </h2>

              <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
                We are more than just a print shop. Based in Oklahoma City,
                Backroom Prints is affiliated with Backroom Productions OKC,
                bringing together creative expertise from both the printing and
                music production worlds.
              </p>
              <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
                Our unique position allows us to understand the needs of
                artists, musicians, businesses, and brands. We deliver
                high-quality printing with the creative touch and attention to
                detail that sets your project apart.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/backroomprints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  @backroomprints
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://www.instagram.com/backroomproductionsokc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  @backroomproductionsokc
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-slate-100 bg-slate-50 dark:border-slate-100 dark:bg-slate-950">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">500+</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Projects Completed
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">100%</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Quality Guaranteed
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Fast</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Turnaround Time
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-slate-100 bg-slate-50 dark:border-slate-100 dark:bg-slate-950">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">OKC</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Locally Owned
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-4 py-12 md:py-20 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-balance md:text-5xl">
              Recent Projects
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Check out some of our recent work for local artists, musicians,
              and creative brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="group overflow-hidden">
                <div className="relative aspect-4/3 overflow-hidden bg-secondary/50">
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {project.category.split(" ")[0]?.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs tracking-wider text-muted-foreground uppercase">
                    {project.category}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="bg-muted/20 px-4 py-12 md:py-20 dark:bg-muted"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-balance md:text-5xl">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, straightforward, and focused on bringing your vision to
              life.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="bg-foreground px-4 py-12 text-background md:py-20 xl:py-32">
        <div className="mx-auto max-w-5xl">
          <Card className="border-0 p-8 md:p-12 dark:bg-foreground">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance md:text-4xl dark:text-background">
                Affiliated with Backroom Productions OKC
              </h2>
              <p className="mb-6 text-lg dark:text-muted">
                Born from our roots in music production, we understand the
                creative process and the importance of quality representation
                for your art.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://www.instagram.com/backroomproductionsokc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black"
                >
                  <Instagram className="size-4" />
                  Follow Backroom Productions
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-muted/20 px-4 py-12 md:py-20 xl:py-32 dark:bg-muted"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-balance md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Ready to start your project? Fill out the form below and we will
              get back to you shortly.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Tell us about your project and we will provide a custom quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                    Thanks for reaching out! We will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Band Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select
                      required
                      value={formData.service_type}
                      onValueChange={(value) =>
                        updateField("service_type", value as ServiceType)
                      }
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apparel">Custom Apparel</SelectItem>
                        <SelectItem value="promotional">
                          Promotional Products
                        </SelectItem>
                        <SelectItem value="artist_merch">
                          Artist & Band Merch
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-foreground text-background"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get a Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        info@backroomprints.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(405) 555-PRINT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Oklahoma City, OK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {REASONS.map((r) => (
                    <div key={r.title} className="flex items-start gap-3">
                      <Check className="mt-1 size-5 text-green-400" />
                      <div>
                        <p className="font-medium">{r.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {r.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 md:py-12 xl:pt-16">
        <div className="mx-auto flex max-w-md flex-col">
          <div className="flex flex-col items-center justify-between gap-4 pb-2 md:flex-row">
            <div className="text-center">
              <div className="flex items-center gap-1">
                <Image
                  src="/logo.png"
                  alt="Backroom Prints Logo"
                  width={50}
                  height={50}
                />
                <div className="text-start text-2xl text-foreground">
                  <div className="leading-none font-black -tracking-wider">
                    BACKROOM
                    <span className="pl-0.5 font-extrabold -tracking-wide text-muted-foreground">
                      PRINTS
                    </span>
                  </div>

                  <div className="text-sm leading-none font-medium text-muted-foreground">
                    Premium printing for creatives
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/backroomprints"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Backroom Prints on Instagram"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-10 text-center text-sm text-muted-foreground">
            <p>© 2026 Backroom Prints. All Rights Reserved.</p>
            <div className="flex justify-center gap-2 text-sm text-slate-400">
              <a
                href="https://www.instagram.com/backroomprints"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/backroomproductionsokc"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                Backroom Productions
              </a>
            </div>
            <p>Oklahoma Forever.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
