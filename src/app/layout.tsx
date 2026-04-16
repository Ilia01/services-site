import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilia Goginashvili | Web Development Services",
  description:
    "I build fast, professional websites for coaches, consultants, and service businesses. Get a site that brings you clients.",
  metadataBase: new URL("https://services.iliagoginashvili.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ilia Goginashvili | Web Development Services",
    description:
      "Fast, professional websites for coaches and service businesses.",
    siteName: "Ilia Goginashvili Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
