import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { CartProvider } from "@/contexts/CartContext";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
