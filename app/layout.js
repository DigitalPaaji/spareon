import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import PreLoader from "@/components/PreLoader";
import ContactPopup from "@/components/ContactPopup";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: {
    default: "Spareon India | Rice Mill Machinery Spare Parts",
    template: "%s | Spareon India",
  },
  description:
    "Spareon India supplies high-quality spare parts for Satake, Bühler, and other rice mill machinery, delivering reliable performance and precision.",
  keywords: [
    "Spareon India",
    "rice mill spare parts",
    "rice mill machinery parts",
    "Satake spare parts",
    "Bühler spare parts",
    "industrial spare parts",
  ],
  icons: {
    icon: [
      { url: "/Images/favicon.png", type: "image/png" },
      { url: "/Images/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/Images/favicon.png",
    apple: "/Images/favicon.png",
  },
  openGraph: {
    title: "Spareon India | Rice Mill Machinery Spare Parts",
    description:
      "High-quality spare parts and dependable solutions for rice mill machinery.",
    siteName: "Spareon India",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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