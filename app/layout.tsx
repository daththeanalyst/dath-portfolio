import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimitrios Athinaios | Geospatial Data Scientist",
  description:
    "Portfolio of Dimitrios Athinaios — Geospatial Data Scientist, ML Engineer, and Analytics professional. Explore projects in geospatial intelligence, machine learning, and data engineering.",
  keywords: [
    "geospatial",
    "data scientist",
    "machine learning",
    "portfolio",
    "analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-void text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
