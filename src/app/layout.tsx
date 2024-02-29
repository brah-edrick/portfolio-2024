import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/contexts/darkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Hedrick · brah.dev",
  description: "brah.dev · Brandon Hedrick's portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      <body className={inter.className}><DarkModeProvider>{children}</DarkModeProvider></body>
    </html>
  );
}
