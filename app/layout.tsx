import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// IMPORTAÇÕES DO HEADER E FOOTER
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMMEN",
  description: "Conexões iluminadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050509]`}>

        {/* 🔥 HEADER GLOBAL */}
        <Header />

        {/* 🔥 CONTEÚDO DAS PÁGINAS */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 🔥 FOOTER GLOBAL */}
        <Footer />

      </body>
    </html>
  );
}
