"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="relative flex items-center justify-between rounded-full border border-samka-marrom/10 bg-samka-ivory/90 px-5 py-2 shadow-sm backdrop-blur-md">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center ml-4 md:ml-8">
            <Image 
            src="/logo/logo-samka-escura.png" 
            alt="SAMKA Arquitetura + Interiores" 
            width={180}
            height={120}
            priority
            className="h-auto w-[105px] md:w-[125px]"
            />
            </a>

          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#projetos"
              className="text-sm tracking-wide text-samka-marrom transition hover:text-samka-terracota"
            >
              Projetos
            </a>

            <a
              href="#arquitetura"
              className="text-sm tracking-wide text-samka-marrom transition hover:text-samka-terracota"
            >
              Arquitetura
            </a>

            <a
              href="#interiores"
              className="text-sm tracking-wide text-samka-marrom transition hover:text-samka-terracota"
            >
              Interiores
            </a>

            <a
              href="#sobre"
              className="text-sm tracking-wide text-samka-marrom transition hover:text-samka-terracota"
            >
              Sobre
            </a>
          </nav>

          {/* BOTÃO CONTATO */}
          <a
            href="#contato"
            className="hidden rounded-full bg-samka-marrom px-5 py-2.5 text-sm font-medium tracking-wide text-samka-ivory transition hover:bg-samka-terracota md:block"
          >
            Vamos conversar
          </a>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-samka-marrom md:hidden"
            aria-label="Abrir menu"
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          {/* MENU MOBILE */}
          {menuOpen && (
            <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-samka-marrom/10 bg-samka-ivory p-6 shadow-lg md:hidden">
              <nav className="flex flex-col gap-5">

                <a
                  href="#projetos"
                  onClick={() => setMenuOpen(false)}
                  className="text-samka-marrom"
                >
                  Projetos
                </a>

                <a
                  href="#arquitetura"
                  onClick={() => setMenuOpen(false)}
                  className="text-samka-marrom"
                >
                  Arquitetura
                </a>

                <a
                  href="#interiores"
                  onClick={() => setMenuOpen(false)}
                  className="text-samka-marrom"
                >
                  Interiores
                </a>

                <a
                  href="#sobre"
                  onClick={() => setMenuOpen(false)}
                  className="text-samka-marrom"
                >
                  Sobre
                </a>

                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-samka-marrom px-5 py-3 text-center text-sm text-samka-ivory"
                >
                  Vamos conversar
                </a>

              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}