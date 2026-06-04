"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Benefits() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: "VIDRO",
      title: "Proteção contra Bandeiras Tarifárias",
      desc: "Você não será mais penalizado por crises hídricas ou reajustes regulatórios. O custo da sua energia fica fixo, previsível e controlado por você.",
      color: "bg-cyan-900/40 border-cyan-500/50"
    },
    {
      id: "CÉLULA",
      title: "Equipamento Tier 1 Global",
      desc: "Trabalhamos exclusivamente com marcas globais que garantem 25 anos de eficiência de geração mínima de 80%. Sem surpresas no longo prazo.",
      color: "bg-blue-900/40 border-blue-500/50"
    },
    {
      id: "CHASSI",
      title: "Instalação Aerodinâmica e Silenciosa",
      desc: "Nossa equipe de engenharia planeja cada etapa para não interromper a rotina da sua empresa ou residência. Estruturas fixadas com precisão milimétrica.",
      color: "bg-zinc-800/80 border-zinc-500/50"
    }
  ];

  return (
    <section id="tecnologia" className="w-full py-32 bg-[#09090b] relative border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-zinc-600" />
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              Anatomia da Engenharia
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-12">
            A desconstrução <br />
            da performance.
          </h2>

          <div className="flex flex-col gap-4 mb-8">
            {layers.map((layer, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveLayer(index)}
                className={`cursor-pointer transition-all duration-300 border-l-2 pl-6 py-2 ${
                  activeLayer === index ? "border-zinc-300" : "border-zinc-800 opacity-40 hover:opacity-100"
                }`}
              >
                <div className="text-[10px] font-mono text-zinc-500 mb-1">CAMADA 0{index + 1} // {layer.id}</div>
                <h3 className="text-xl font-semibold text-zinc-200">{layer.title}</h3>
              </div>
            ))}
          </div>


          <div className="h-24 pl-6 border-l-2 border-transparent">
            <motion.p 
              key={activeLayer}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 text-sm leading-relaxed"
            >
              {layers[activeLayer].desc}
            </motion.p>
          </div>
        </div>


        <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
          <div className="relative w-64 h-80 transform-gpu rotate-x-60 -rotate-z-45 transition-all duration-700 ease-out">

              <motion.div
                key="chassi"
                className={`absolute inset-0 rounded-md border-2 ${layers[2].color} shadow-2xl backdrop-blur-sm`}
                animate={{
                  y: activeLayer === 2 ? 0 : activeLayer > 2 ? -20 : 20,
                  opacity: activeLayer === 2 ? 1 : 0.3
                }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                key="celula"
                className={`absolute inset-0 rounded-md border ${layers[1].color} shadow-2xl backdrop-blur-sm`}
                animate={{
                  y: activeLayer === 1 ? -40 : activeLayer > 1 ? -60 : -20,
                  opacity: activeLayer === 1 ? 1 : 0.3
                }}
                transition={{ duration: 0.5 }}
              >

                <div className="absolute inset-2 grid grid-cols-4 grid-rows-6 gap-1 opacity-50">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-blue-500/20 rounded-[1px]" />
                  ))}
                </div>
              </motion.div>

              <motion.div
                key="vidro"
                className={`absolute inset-0 rounded-md border border-t-2 border-l-2 ${layers[0].color} shadow-[0_0_50px_rgba(6,182,212,0.1)] backdrop-blur-md`}
                animate={{
                  y: activeLayer === 0 ? -80 : activeLayer > 0 ? -100 : -60,
                  opacity: activeLayer === 0 ? 1 : 0.3
                }}
                transition={{ duration: 0.5 }}
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
