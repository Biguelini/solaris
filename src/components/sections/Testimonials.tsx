"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cases = [
    {
      id: "049",
      type: "Residência Premium",
      location: "Alphaville, SP",
      author: "Roberto C.",
      roi: "3.2 Anos",
      quote: "A equipe dimensionou exatamente o que minha casa precisava para cobrir os picos do ar condicionado no verão."
    },
    {
      id: "112",
      type: "Clínica Médica",
      location: "Batel, PR",
      author: "Dra. Mariana V.",
      roi: "2.8 Anos",
      quote: "Mostraram a taxa de degradação no longo prazo e o ROI exato. Instalação sem alterar a rotina da clínica."
    },
    {
      id: "087",
      type: "Indústria Leve",
      location: "Joinville, SC",
      author: "Carlos E.",
      roi: "2.1 Anos",
      quote: "O projeto de engenharia previu nossa expansão futura. Hoje a fábrica roda 100% off-grid durante o pico."
    }
  ];

  return (
    <section id="cases" className="w-full py-32 bg-[#111113] border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-zinc-600" />
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              Arquivo de Operações
            </span>
          </div>
          <h2 className="text-4xl font-bold text-zinc-100 tracking-tight">
            Engenharia em Campo
          </h2>
        </div>


        <div className="flex flex-col border-t border-zinc-800">
          {cases.map((c, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800 cursor-crosshair transition-colors hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-8 md:w-1/3 mb-4 md:mb-0">
                <span className="text-xs font-mono text-zinc-600">CASO #{c.id}</span>
                <div>
                  <h4 className="text-zinc-200 font-medium">{c.type}</h4>
                  <span className="text-xs text-zinc-500 font-mono uppercase">{c.location}</span>
                </div>
              </div>

              <div className="md:w-1/3 mb-4 md:mb-0 pr-8">
                <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-2 group-hover:text-zinc-300 transition-colors">
                  "{c.quote}"
                </p>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-2 block">— {c.author}</span>
              </div>

              <div className="md:w-1/6 flex justify-end">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Retorno Previsto</span>
                  <span className="text-lg font-medium text-emerald-500/80">{c.roi}</span>
                </div>
              </div>


              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 w-80 h-52 bg-[#09090b] border border-zinc-700/50 rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-1 items-center justify-center overflow-hidden"
                >
                  <div className="relative w-full h-full rounded-md overflow-hidden">
                    <Image
                      src={`/case-${c.id}.png`}
                      alt={`Projeto ${c.type}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500/90 backdrop-blur text-zinc-950 font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                      Projeto Entregue
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
