import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Emilie Giltvedt Langeland",
  description: "Emilie Giltvedt Langeland's personal website",
};

// 1. Initialize the font
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  // This is important: we want both regular and italic
  style: ['normal', 'italic'], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={bodoni.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
