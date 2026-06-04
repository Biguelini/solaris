export default function CookiesPage() {
  return (
    <main className="w-full min-h-screen bg-[#09090b] flex flex-col px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-8">Uso de Cookies</h1>
        <div className="prose prose-invert prose-zinc max-w-none text-sm text-zinc-400 font-light">
          <p>Última atualização: Junho de 2026</p>
          <p>
            Utilizamos cookies essenciais para garantir o funcionamento da nossa plataforma. Não realizamos
            rastreamento intrusivo cross-site. Ao continuar navegando, você concorda com nosso uso minimalista de cookies.
          </p>
        </div>
      </div>
    </main>
  );
}
