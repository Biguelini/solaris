export default function IntegracoesPage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-zinc-600" />
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            Plataforma B2B
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-8">
          Integrações Corporativas
        </h1>
        <p className="text-zinc-400 leading-relaxed mb-6 font-light">
          Nossa API permite integração direta com sistemas de gestão de Facilities e ERPs corporativos para o reporte automatizado de redução de CO2 e economia financeira (ESG).
        </p>
        <div className="mt-8 p-6 border border-zinc-800 rounded-md bg-[#111113]">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">[ DOCUMENTAÇÃO DA API EM BREVE ]</span>
        </div>
      </div>
    </main>
  );
}
