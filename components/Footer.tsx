export default function Footer() {
  return (
    <footer className="bg-samka-marrom text-samka-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <a
              href="#inicio"
              className="text-3xl font-semibold tracking-[0.18em]"
            >
              SAMKA
            </a>

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-samka-ivory/50">
              Arquitetura + Interiores
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-samka-bege">
              Navegação
            </p>

            <nav className="flex flex-col gap-3 text-samka-ivory/70">
              <a
                href="#projetos"
                className="transition hover:text-samka-ivory"
              >
                Projetos
              </a>

              <a
                href="#arquitetura"
                className="transition hover:text-samka-ivory"
              >
                Arquitetura
              </a>

              <a
                href="#interiores"
                className="transition hover:text-samka-ivory"
              >
                Interiores
              </a>

              <a
                href="#sobre"
                className="transition hover:text-samka-ivory"
              >
                Sobre
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-samka-bege">
              Contato
            </p>

            <div className="flex flex-col gap-3 text-samka-ivory/70">
              <span>Instagram</span>
              <span>WhatsApp</span>
              <span>E-mail</span>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-samka-ivory/15 pt-8 text-sm text-samka-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 SAMKA — Arquitetura + Interiores
          </p>

          <a
            href="#inicio"
            className="transition hover:text-samka-ivory"
          >
            Voltar ao topo ↑
          </a>
        </div>

      </div>
    </footer>
  );
}