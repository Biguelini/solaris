"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [power, setPower] = useState(482);
  const [status, setStatus] = useState("OTIMIZADO");

  useEffect(() => {
    const interval = setInterval(() => {
      setPower((prev) => Math.floor(prev + (Math.random() * 10 - 5)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center bg-[#09090b] overflow-hidden pt-20">
      

      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10" />
        
        <Image
          src="/solar-hero.png"
          alt="Detalhe de engenharia de módulo fotovoltaico"
          fill
          className="object-cover object-right opacity-80 mix-blend-luminosity"
          priority
        />
        

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-24 right-12 z-20 flex items-center gap-3 bg-[#111113]/90 backdrop-blur-md border border-zinc-700/50 p-3 rounded-md shadow-2xl"
        >
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </div>
          <span className="font-mono text-[10px] text-zinc-300 tracking-widest uppercase">
            [ STATUS: {status} - {power}W/M2 ]
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 relative z-20">
        

        <div className="lg:col-span-8 flex flex-col gap-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-zinc-600" />
            <span className="text-[10px] font-mono font-medium text-zinc-400 tracking-widest uppercase">
              Infraestrutura Energética de Precisão
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-100 leading-[1.1] md:leading-[1.05]"
          >
            Proteja seu <br className="hidden md:block" />
            orçamento contra a <br className="hidden md:block" />
            <span className="text-zinc-500">inflação.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light"
          >
            Projetos solares dimensionados matematicamente para reduzir sua fatura a praticamente zero. Sem surpresas na conta de luz, com monitoramento físico de performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <a
              href="#simulador"
              className="group relative h-14 px-8 flex items-center justify-center bg-zinc-200 text-[#09090b] font-medium text-sm transition-all hover:bg-white overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_15px_rgba(255,255,255,0.05)] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Simular Economia
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </span>
            </a>
            <a
              href="#cases"
              className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"
            >
              Ver dossiês de clientes
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
