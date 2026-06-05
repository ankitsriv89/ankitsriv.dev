import type { Metadata } from "next";
import { IBM_Plex_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: { default: "Ankit Srivastava", template: "%s — Ankit Srivastava" },
  description: "Software engineer focused on distributed systems, data pipelines, and backend infrastructure.",
  metadataBase: new URL("https://ankitsriv.dev"),
  openGraph: {
    title: "Ankit Srivastava",
    description: "Software engineer focused on distributed systems, data pipelines, and backend infrastructure.",
    url: "https://ankitsriv.dev",
    siteName: "ankitsriv.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ankit Srivastava",
    description: "Software engineer focused on distributed systems, data pipelines, and backend infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${ibmMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
