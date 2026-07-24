import type { Metadata, Viewport } from "next";
import { Cal_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

/* Display face used for every headline; body face for everything else. */
const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cal-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  keywords: [
    "creative agency",
    "brand design",
    "web design",
    "logo design",
    "portfolio",
    "design studio London",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f0f0f0",
  width: "device-width",
  initialScale: 1,
};

/** Organisation schema so search engines can read the studio's details. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "GB" },
  founder: { "@type": "Person", name: site.founder },
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${calSans.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {/* Clears the floating nav island (top offset + bar height). */}
        <main id="main" className="pt-[88px] md:pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
