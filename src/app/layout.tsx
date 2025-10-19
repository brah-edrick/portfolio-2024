import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/contexts/darkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Hedrick - Full Stack Engineer & Technologist",
  description:
    "Full Stack Engineer with 10+ years of experience in React, TypeScript, Node.js, and modern web technologies. Specializing in UI/UX design from an engineering perspective.",
  keywords: [
    "Brandon Hedrick",
    "Full Stack Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "UI/UX Design",
    "Frontend Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Brandon Hedrick" }],
  creator: "Brandon Hedrick",
  publisher: "Brandon Hedrick",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brah.work",
    siteName: "brah.work",
    title: "Brandon Hedrick - Full Stack Engineer & Technologist",
    description:
      "Full Stack Engineer with 10+ years of experience in React, TypeScript, Node.js, and modern web technologies. Specializing in UI/UX design from an engineering perspective.",
    images: [
      {
        url: "/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Brandon Hedrick - Full Stack Engineer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://brah.work",
  },
  category: "technology",
  classification: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
