import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Via Roma",
  description: "Discover our collection of luxury products and store locations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
