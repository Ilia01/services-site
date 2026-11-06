import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
export const viewport: Viewport = { themeColor: "#172722", colorScheme: "dark" };
export const metadata: Metadata = {
  title: "Furniture Catalog Rescue | Reviewed Shopify Price Updates",
  description: "Turn furniture supplier CSV and XLSX price sheets into reviewed changes for existing Shopify variants. Start with a free ten-row sample. $149 for up to 500 supplier variant rows.",
  metadataBase: new URL("https://services.iliagoginashvili.com"), alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", title: "Your price sheet. In good order.", description: "Reviewed furniture supplier prices for existing Shopify variants. Start with ten rows.", siteName: "Furniture Catalog Rescue", images: [{ url: "/images/hero.webp", width: 1536, height: 1024, alt: "An oak desk on a deep forest backdrop" }] },
  twitter: { card: "summary_large_image", title: "Furniture Catalog Rescue", description: "Reviewed supplier price changes for existing Shopify furniture variants.", images: ["/images/hero.webp"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={archivo.variable}>{children}</body></html>;
}
