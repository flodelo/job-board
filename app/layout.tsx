import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from '../components/shared/Navbar';
import Hero from "@/components/shared/Hero";
import { EdgeStoreProvider } from "@/lib/edgestore";

const raleway = Raleway({ subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700","900"]
 });

export const metadata: Metadata = {
  title: "Job board",
  description: "Job board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={raleway.className}>
      <EdgeStoreProvider>
        <Navbar />
        <Hero />
        {children}
      </EdgeStoreProvider>
      </body>
    </html>
  );
}
