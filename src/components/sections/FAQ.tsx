"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O sistema funciona quando está chovendo ou nublado?",
      answer: "Sim. A geração diminui em dias de baixa irradiação, mas nossos sistemas são dimensionados considerando a média climática anual da sua região para garantir que a produção total feche a conta no fim do ano.",
    },
    {
      question: "Qual é a manutenção real necessária?",
      answer: "Mínima. Recomendamos uma limpeza anual dos módulos para retirar poeira acumulada que pode reduzir a eficiência em 3% a 5%. Você acompanha eventuais quedas de performance direto no nosso aplicativo.",
    },
    {
      question: "E se a concessionária mudar as regras?",
      answer: "O Marco Legal da Geração Distribuída no Brasil estabeleceu regras de transição. Ao instalar seu sistema conosco, aprovamos seu projeto sob as normativas vigentes, garantindo segurança jurídica contra mudanças abruptas de tarifação.",
    },
  ];

  return (
    <section className="w-full py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4 tracking-tight">
            Perguntas Técnicas
          </h2>
          <p className="text-zinc-400 text-lg">
            Transparência total sobre como nossa engenharia opera.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800/60 rounded-2xl bg-zinc-900/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-zinc-200 pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-emerald-400 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
