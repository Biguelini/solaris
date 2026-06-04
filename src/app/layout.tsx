import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solaris Energia Solar | Precisão e Tecnologia",
  description: "Transforme sua infraestrutura com sistemas solares baseados em dados em tempo real, monitoramento inteligente e engenharia de alto desempenho.",
  openGraph: {
    title: "Solaris Energia Solar | Precisão e Tecnologia",
    description: "Sistemas solares baseados em dados em tempo real.",
    type: "website",
    url: "https://solaris.energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solaris Energia Solar",
    description: "Energia limpa. Precisão absoluta.",
  },
};
import { Outfit, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased dark overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
