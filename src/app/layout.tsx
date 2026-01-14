import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Emilie Giltvedt Langeland",
  description: "Emilie Giltvedt Langeland's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
