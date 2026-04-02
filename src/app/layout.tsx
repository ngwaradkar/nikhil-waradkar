import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Cursor from "../components/UI/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Waradkar | 3D PPC Portfolio",
  description: "Assistant Manager - Production Planning & Control | 11+ Years Experience | SAP PP/MM | AI Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-industrial-base text-white`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
