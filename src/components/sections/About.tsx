export function About() {
  return (
    <section id="sobre" className="w-full py-32 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-zinc-600" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                Sobre a Solaris
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
              A firma de <br /> engenharia.
            </h2>
          </div>

          <div className="md:w-2/3 flex flex-col gap-8">
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              Não somos uma empresa de vendas. Somos uma firma focada puramente em engenharia. Nascemos da necessidade de trazer rigor matemático e equipamentos de grau industrial (Tier 1) para o mercado fotovoltaico comercial e residencial de alto padrão.
            </p>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              Enquanto o mercado se concentra em promessas comerciais vagas, nossa operação foca na eliminação absoluta de risco financeiro através de projetos dimensionados milimetricamente, entregando infraestrutura energética desenhada para operar com eficiência máxima pelas próximas duas décadas.
            </p>
            <div className="flex items-center gap-12 mt-4 pt-8 border-t border-zinc-800">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-medium text-zinc-100 tracking-tighter">0.0%</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Taxa de Falha Estrutural</span>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-medium text-emerald-500/80 tracking-tighter">+40MW</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Capacidade Instalada</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
