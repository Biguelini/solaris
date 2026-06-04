import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 bg-zinc-950 pt-20 pb-10 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-gradient-to-br from-zinc-300 to-zinc-600 rounded-[4px] flex items-center justify-center shadow-inner border border-zinc-500/30">
              <div className="w-2 h-2 rounded-full bg-[#111113] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
            </div>
            <span className="text-zinc-200 font-medium tracking-wide uppercase text-xs">Solaris</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Engenharia de precisão para transição energética. Desenhado para empresas e residências premium.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Plataforma</h4>
          <ul className="space-y-3">
            <li><Link href="/simulador" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Simulador SaaS</Link></li>
            <li><Link href="/integracoes" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Integrações B2B</Link></li>
            <li><Link href="/monitoramento" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Monitoramento</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Empresa</h4>
          <ul className="space-y-3">
            <li><Link href="/sobre" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Sobre Nós</Link></li>
            <li><Link href="/carreiras" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Carreiras</Link></li>
            <li><Link href="/casos" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Casos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/termos" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Termos de Serviço</Link></li>
            <li><Link href="/privacidade" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Privacidade</Link></li>
            <li><Link href="/cookies" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/30">
        <p className="text-zinc-600 text-sm mb-4 md:mb-0">
          © 2026 Solaris Energia Solar. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Sistemas Operacionais</span>
        </div>
      </div>
    </footer>
  );
}
