"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-samka-marrom"
    >
      {/* IMAGEM */}
      <div className="absolute inset-0">
        <img
          src="/imagens/hero-samka.jpg"
          alt="Projeto de arquitetura SAMKA"
          className="h-full w-full object-cover"
        />
      </div>

      {/* SOBREPOSIÇÃO */}
      <div className="absolute inset-0 bg-samka-marrom/45" />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-40 md:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-samka-offwhite">
            Arquitetura + Interiores
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-samka-ivory md:text-7xl lg:text-8xl">
            Espaços que traduzem
            <span className="block text-samka-bege">
              histórias e formas de viver.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-samka-ivory/80 md:text-xl">
            Projetos pensados para unir identidade, funcionalidade
            e estética em cada detalhe.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-full bg-samka-ivory px-7 py-4 text-sm font-medium text-samka-marrom transition duration-300 hover:bg-samka-bege"
            >
              Conhecer projetos
            </a>

            <a
              href="#contato"
              className="rounded-full border border-samka-ivory/50 px-7 py-4 text-sm font-medium text-samka-ivory transition duration-300 hover:bg-samka-ivory hover:text-samka-marrom"
            >
              Fale conosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}