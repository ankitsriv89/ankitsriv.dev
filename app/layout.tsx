import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: { default: "Ankit Srivastava", template: "%s — Ankit Srivastava" },
  description: "Engineer and interdisciplinary thinker working across technology, finance, economics, law, and psychology.",
  metadataBase: new URL("https://ankitsriv.dev"),
  openGraph: {
    title: "Ankit Srivastava",
    description: "Engineer and interdisciplinary thinker working across technology, finance, economics, law, and psychology.",
    url: "https://ankitsriv.dev",
    siteName: "ankitsriv.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ankit Srivastava",
    description: "Engineer and interdisciplinary thinker working across technology, finance, economics, law, and psychology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmMono.variable}`}>
      <body className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 min-w-0">{children}</main>
      </body>
    </html>
  );
}
