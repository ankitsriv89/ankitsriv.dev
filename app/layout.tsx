import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Shell from "@/components/layout/Shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "The digital headquarters of Ankit Srivastava — a software engineer and systems thinker building and studying systems across engineering, AI, economics, finance, psychology, and law.";

export const metadata: Metadata = {
  title: {
    default: "Ankit Srivastava — Engineer & Systems Thinker",
    template: "%s — Ankit Srivastava",
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://ankitsriv.dev"),
  keywords: [
    "Ankit Srivastava",
    "software engineer",
    "systems thinker",
    "distributed systems",
    "system design",
    "AI agents",
    "economics",
    "finance",
  ],
  authors: [{ name: "Ankit Srivastava" }],
  openGraph: {
    title: "Ankit Srivastava — Engineer & Systems Thinker",
    description: DESCRIPTION,
    url: "https://ankitsriv.dev",
    siteName: "ankitsriv.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Srivastava — Engineer & Systems Thinker",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
