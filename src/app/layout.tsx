import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export const viewport: Viewport = {
  themeColor: "#F4F3EE",
  colorScheme: "light",
};
export const metadata: Metadata = {
  title: "Furniture Catalog Rescue | Reviewed Shopify Price Updates",
  description:
    "Turn furniture supplier CSV and XLSX price sheets into reviewed changes for existing Shopify variants. Start with a free ten-row sample. $149 for up to 500 supplier variant rows.",
  metadataBase: new URL("https://services.iliagoginashvili.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Every price in its place.",
    description:
      "Reviewed furniture supplier prices for existing Shopify variants. Start with ten rows.",
    siteName: "Furniture Catalog Rescue",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Furniture Catalog Rescue: Every price in its place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Catalog Rescue",
    description:
      "Reviewed supplier price changes for existing Shopify furniture variants.",
    images: ["/opengraph-image"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
