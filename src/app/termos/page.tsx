export default function TermosPage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-8">Termos de Serviço</h1>
        <div className="prose prose-invert prose-zinc max-w-none text-sm text-zinc-400 font-light">
          <p>Última atualização: Junho de 2026</p>
          <p>
            Estes termos de serviço regulam o uso deste site. Ao acessá-lo, você concorda com estes termos.
            A Solaris Energia Solar reserva-se o direito de alterar as especificações técnicas de seus projetos
            de acordo com as normativas da ANEEL e legislações vigentes.
          </p>
        </div>
      </div>
    </main>
  );
}
