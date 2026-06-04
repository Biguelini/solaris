export default function CarreirasPage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-zinc-600" />
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            Junte-se à Solaris
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-8">
          Engenharia de Alta Performance.
        </h1>
        <p className="text-zinc-400 leading-relaxed mb-6 font-light">
          Estamos sempre em busca de engenheiros eletricistas, desenvolvedores de software e especialistas em dados que queiram resolver o problema energético de forma definitiva.
        </p>
        <div className="mt-8 p-6 border border-zinc-800 rounded-md bg-[#111113]">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">NENHUMA VAGA ABERTA NO MOMENTO</span>
        </div>
      </div>
    </main>
  );
}
