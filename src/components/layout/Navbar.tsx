"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 ease-out",
        scrolled ? "pt-2 px-4" : "pt-6 px-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between w-full transition-all duration-500 overflow-hidden relative",
          scrolled
            ? "max-w-5xl rounded-2xl bg-[#111113] border border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.8)] h-14 px-6"
            : "max-w-7xl bg-transparent border-transparent h-20 px-4"
        )}
      >

        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-gradient-to-br from-zinc-300 to-zinc-600 rounded-[4px] flex items-center justify-center shadow-inner border border-zinc-500/30">
            <div className="w-2 h-2 rounded-full bg-[#111113] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
          </div>
          <span className="text-zinc-200 font-medium tracking-wide uppercase text-xs">Solaris</span>
        </Link>


        <div className="hidden md:flex items-center gap-10">
          <Link href="#tecnologia" className="text-[11px] font-mono font-medium text-zinc-500 hover:text-zinc-200 transition-colors uppercase tracking-widest">
            Tecnologia
          </Link>
          <Link href="#simulador" className="text-[11px] font-mono font-medium text-zinc-500 hover:text-zinc-200 transition-colors uppercase tracking-widest">
            Motor de Cálculo
          </Link>
          <Link href="#cases" className="text-[11px] font-mono font-medium text-zinc-500 hover:text-zinc-200 transition-colors uppercase tracking-widest">
            Dossiês
          </Link>
        </div>


        <div className="flex items-center">
          <Link
            href="#simulador"
            className="relative h-8 px-5 flex items-center justify-center rounded-sm bg-gradient-to-b from-zinc-200 to-zinc-400 border border-zinc-400 text-zinc-950 text-[11px] font-bold uppercase tracking-wider hover:from-white hover:to-zinc-300 transition-all shadow-[0_2px_10px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] active:scale-[0.98] active:shadow-inner"
          >
            Simular Economia
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
