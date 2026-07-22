import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import PreLoader from "@/components/PreLoader";
import ContactPopup from "@/components/ContactPopup";
import FloatingButtons from "@/components/FloatingButtons";

const siteUrl = "https://spareonindia.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Spareon India | Rice Mill Machinery Spare Parts",
    template: "%s | Spareon India",
  },

  description:
    "Spareon India supplies precision-engineered spare parts for Satake, Bühler, and advanced rice mill machinery. Get reliable components, ready stock, expert support, and dependable delivery across India.",

  keywords: [
    "Spareon India",
    "rice mill spare parts",
    "rice mill machinery parts",
    "Satake spare parts",
    "Bühler spare parts",
    "rice milling machine parts",
    "rice mill components India",
    "rice mill equipment supplier",
    "Taiwan rice mill spare parts",
  ],

  authors: [{ name: "Spareon India" }],
  creator: "Spareon India",
  publisher: "Spareon India",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Spareon India | Rice Mill Machinery Spare Parts",
    description:
      "Precision-engineered spare parts for Satake, Bühler, and advanced rice mill machinery, backed by dependable supply and expert support.",
    url: siteUrl,
    siteName: "Spareon India",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/Images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Spareon India rice mill machinery spare parts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spareon India | Rice Mill Machinery Spare Parts",
    description:
      "Reliable and precision-engineered spare parts for modern rice milling machinery.",
    images: ["/Images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Rice Mill Machinery Spare Parts",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Spareon India",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Supplier of precision-engineered spare parts for Satake, Bühler, and advanced rice mill machinery.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Spareon India",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <PreLoader />
        <Header />

        <main>{children}</main>

        <Footer />
        <ContactPopup />
        <FloatingButtons />
      </body>
    </html>
  );
}