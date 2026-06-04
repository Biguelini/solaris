"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const calculateSimulation = (bill: number) => {
  const energyCostRate = 0.95; 
  const monthlyKwh = bill / energyCostRate;
  const panelsNeeded = Math.ceil(monthlyKwh / 55); 
  const systemCost = panelsNeeded * 1500; 
  const monthlySavings = bill * 0.95; 
  const roiMonths = monthlySavings > 0 ? Math.ceil(systemCost / monthlySavings) : 0;

  const totalSavings25Years = Array.from({ length: 25 }).reduce((acc: number, _, i) => {
    const costWithoutSolar = bill * 12 * Math.pow(1.05, i);
    const costWithSolar = (bill * 0.05 * 12);
    return acc + (costWithoutSolar - costWithSolar);
  }, 0) - systemCost;

  return { panelsNeeded, systemCost, monthlySavings, roiMonths, totalSavings25Years };
};

export function Simulator() {
  const [billValue, setBillValue] = useState(850);
  const simulation = calculateSimulation(billValue);

  return (
    <section id="simulador" className="w-full py-32 bg-[#111113] relative overflow-hidden">
      

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
              Módulo de Cálculo 01
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
            Projeção de Rendimento
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-5 bg-[#09090b] border-2 border-zinc-800 rounded-lg p-8 shadow-[inset_0_2px_20px_rgba(255,255,255,0.02),0_10px_40px_rgba(0,0,0,0.5)]">
            
            <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Input de Fatura (R$)</span>
              <div className="flex items-center">
                <span className="text-3xl font-mono text-zinc-500 mr-2">R$</span>
                <input 
                  type="number"
                  value={billValue || ""}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="w-28 bg-transparent text-right text-3xl font-mono text-zinc-100 font-medium tracking-tighter outline-none border-b-2 border-transparent focus:border-zinc-500 transition-colors"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="relative py-10">

              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-4 bg-zinc-950 rounded-full border border-zinc-800 shadow-inner" />
              
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={billValue}
                onChange={(e) => setBillValue(Number(e.target.value))}
                className="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent outline-none z-10 cursor-ew-resize [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-12 [&::-webkit-slider-thumb]:bg-zinc-300 [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:border-y-4 [&::-webkit-slider-thumb]:border-zinc-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.8),inset_0_0_5px_rgba(0,0,0,0.5)]"
              />


              <div className="absolute left-0 right-0 top-full mt-4 flex justify-between px-2">
                {[200, 1400, 2600, 3800, 5000].map((val) => (
                  <div key={val} className="flex flex-col items-center gap-2">
                    <div className="w-px h-2 bg-zinc-700" />
                    <span className="text-[9px] font-mono text-zinc-600">{val / 1000}k</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-16 text-xs text-zinc-500 font-mono text-center">
              * Deslize para calibrar o volume energético.
            </p>
          </div>


          <div className="lg:col-span-7 relative">
            <motion.div
              key={billValue}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1c] border border-zinc-700/50 rounded-md p-8 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-700 rounded-b-md" />
              
              <div className="flex justify-between items-center mb-10 border-b border-zinc-800 border-dashed pb-4">
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase">Diagnóstico do Sistema</span>
                <span className="text-zinc-400 text-[10px] bg-zinc-800/50 px-2 py-1 rounded">V 2.0.4</span>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-zinc-400">Capacidade Sugerida (Módulos)</span>
                  <span className="text-xl text-zinc-100">{simulation.panelsNeeded} <span className="text-xs text-zinc-600">UN</span></span>
                </div>
                
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-zinc-400">Investimento Estimado CAPEX</span>
                  <span className="text-xl text-zinc-100">R$ {(simulation.systemCost / 1000).toFixed(1)}<span className="text-xs text-zinc-600">k</span></span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-zinc-400">Tempo de Retorno (Payback)</span>
                  <span className="text-xl text-emerald-400">{(simulation.roiMonths / 12).toFixed(1)} <span className="text-xs text-emerald-500/50">ANOS</span></span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-800 border-dashed">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">Lucro Projetado (25 Anos)</span>
                  <span className="text-5xl font-medium tracking-tighter text-zinc-100">
                    R$ {(simulation.totalSavings25Years / 1000).toFixed(1)}k
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
