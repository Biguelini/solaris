export default function MonitoramentoPage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-emerald-600" />
          <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">
            Telemetria Ativa
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-8">
          Controle total na palma da mão.
        </h1>
        <p className="text-zinc-400 leading-relaxed mb-6 font-light">
          Nossa plataforma de monitoramento coleta dados dos inversores a cada 5 segundos. Em breve, disponibilizaremos o acesso público ao painel de demonstração.
        </p>
        <div className="mt-8 p-6 border border-zinc-800 rounded-md bg-[#111113]">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">[ SISTEMA EM DESENVOLVIMENTO ]</span>
        </div>
      </div>
    </main>
  );
}
