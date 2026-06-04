export default function PrivacidadePage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-8">Política de Privacidade</h1>
        <div className="prose prose-invert prose-zinc max-w-none text-sm text-zinc-400 font-light">
          <p>Última atualização: Junho de 2026</p>
          <p>
            Nós levamos sua privacidade a sério. Todas as simulações financeiras feitas em nosso motor de cálculo
            são processadas localmente no seu dispositivo e não armazenamos dados sensíveis de faturamento sem o
            seu consentimento expresso via contato comercial.
          </p>
        </div>
      </div>
    </main>
  );
}
