import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Da Vinci Consulting Services, Behavioral Healthcare Compliance & Credentialing",
    template: "%s · Da Vinci Consulting Services",
  },
  description:
    "Da Vinci Consulting Services helps behavioral health organizations win at compliance, Medicaid credentialing, Joint Commission accreditation, and state licensing. 13+ years, 50+ facilities, 98% retention.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  icons: { icon: "/assets/logo-davinci.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "Behavioral healthcare compliance, Medicaid credentialing, Joint Commission accreditation, and operational consulting.",
  telephone: "+14806068602",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.regionShort,
    postalCode: SITE.address.postal,
    addressCountry: "US",
  },
  areaServed: "US",
  foundingDate: String(SITE.foundedYear),
  url: SITE.url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
