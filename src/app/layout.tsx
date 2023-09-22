import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";
import OverViewPage from "./overview";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Inc",
  description: "Company Services build website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={inter.style}>
        <header className="bg-home-green lg:bg-contain h-screen bg-no-repeat xl:bg-repeat py-12">
          <Navbar />
          <OverViewPage />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
