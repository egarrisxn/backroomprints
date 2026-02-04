import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Backroom Prints - Screen Printing for Bands, Brands & Events",
  description:
    "Premium screen printing in Oklahoma City. Tour merch, band drops, business apparel, and event collabs. Clean ink. Fast communication. Local pickup + nationwide shipping.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Backroom Prints",
    "Backroom Productions",
    "Oklahoma City",
    "printing services",
    "screen printing",
    "band merch",
    "tour merch",
    "custom apparel",
    "streetwear",
    "hardcore",
    "punk",
  ],
  openGraph: {
    title: "Backroom Prints",
    description: "Premium printing services for artists and creatives",
    url: "https://backroomprints.vercel.app",
    siteName: "Backroom Prints",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backroom Prints",
    description: "Premium printing services for artists and creatives",
    creator: "@BackroomPrints",
    site: "@BackroomPrints",
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#090909" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Backroom Prints" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} font-sans antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} min-h-svh max-w-[100vw] font-sans antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
