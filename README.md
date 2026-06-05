<<<<<<< HEAD
#solaris
=======
# Solaris - Soluções em Energia Solar

<p align="center">
  <img src="public/solar-hero.png" alt="Solaris Hero" width="100%" />
</p>

Uma plataforma inovadora, moderna e de alta conversão, desenvolvida para simular a viabilidade e os benefícios financeiros da adoção de energia solar. Construída com um design premium, interativo e focado na experiência do usuário, a aplicação oferece aos clientes uma visão clara do retorno de investimento (ROI) e da economia a longo prazo proporcionada pela transição energética.

## ✨ Funcionalidades

* **Simulador de Viabilidade Interativo:** 
  * Cálculo dinâmico e instantâneo baseado no valor da fatura de energia mensal.
  * Sugestão automática da capacidade do sistema e número de painéis solares (módulos) necessários.
  * Estimativa detalhada do custo do sistema (Investimento Estimado CAPEX).
  * Projeção do tempo de retorno financeiro (Payback em anos).
  * Previsão de economia acumulada (Lucro Projetado) num período de 25 anos.
* **Design Premium e Imersivo:**
  * Micro-interações e animações fluidas implementadas para melhorar a retenção do usuário.
  * Interface limpa, temática dark e tecnológica voltada para inovação e sustentabilidade.
* **Seções Estruturadas para Alta Conversão:**
  * **Hero Section:** Apresentação impactante de alto nível.
  * **Sobre & Benefícios:** Detalhamento das vantagens da tecnologia solar.
  * **FAQ (Perguntas Frequentes):** Eliminação de dúvidas e objeções.
  * **Depoimentos e Casos:** Exibição de dossiês de clientes e cases reais de sucesso para geração de prova social.
* **Estrutura Multi-Página:**
  * Páginas dedicadas para Home, Integrações, Simulador, Sobre a empresa, Casos (Portfólio), Monitoramento, Carreiras, Termos de Uso, Política de Privacidade e Política de Cookies.

## 🚀 Tecnologias Utilizadas

O projeto emprega o que há de mais moderno no ecossistema de desenvolvimento web:

* **[Next.js](https://nextjs.org/) (App Router)** - Framework React para renderização escalável e roteamento avançado.
* **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.
* **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript que adiciona tipagem estática e segurança ao código.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first para estilização rápida e responsiva.
* **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca robusta para animações complexas e transições suaves.
* **[Shadcn UI](https://ui.shadcn.com/)** - Componentes acessíveis, consistentes e altamente customizáveis.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones elegantes.

## 📂 Estrutura de Diretórios

```plaintext
src/
├── app/                  # Rotas da aplicação (Next.js App Router)
│   ├── carreiras/        # Página de vagas e oportunidades
│   ├── casos/            # Dossiês e portfólio de clientes
│   ├── cookies/          # Política de cookies
│   ├── integracoes/      # Página de integrações
│   ├── monitoramento/    # Área de monitoramento de usinas
│   ├── privacidade/      # Política de privacidade
│   ├── simulador/        # Simulador standalone
│   ├── sobre/            # Sobre a empresa
│   ├── termos/           # Termos de uso
│   ├── layout.tsx        # Layout global com configuração de fontes e metadados
│   └── page.tsx          # Landing page principal (Home)
├── components/
│   ├── layout/           # Componentes estruturais (Navbar, Footer)
│   ├── sections/         # Seções independentes da landing page (Hero, About, Simulator, Benefits, FAQ, Testimonials)
│   └── ui/               # Componentes base e reaproveitáveis (botões, inputs, etc)
└── lib/                  # Utilitários e funções auxiliares (ex: formatação, utils.ts)
```

## 🛠️ Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação em seu ambiente local:

1. **Clone o repositório**
```bash
git clone https://github.com/Biguelini/solaris.git
```

2. **Acesse a pasta do projeto**
```bash
cd solaris
```

3. **Instale as dependências**
Recomendamos a utilização do `npm`, `yarn` ou `pnpm`:
```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**
Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o projeto em funcionamento.

## 📄 Licença

Este projeto está licenciado de acordo com as regras estabelecidas no arquivo `LICENSE` disponível na raiz do repositório.
>>>>>>> 99bfd83 (chore: atualiza .gitignore e remove arquivos indesejados)
