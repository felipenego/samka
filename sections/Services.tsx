"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="bg-samka-offwhite">

      {/* ARQUITETURA */}
      <div
        id="arquitetura"
        className="mx-auto grid max-w-7xl lg:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center px-6 py-20 md:px-12 md:py-28 lg:px-16"
        >
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-[0.35em] text-samka-terracota">
              01 • Arquitetura
            </span>

            <h2 className="mt-6 text-4xl font-medium leading-tight text-samka-marrom md:text-6xl">
              Projetar é transformar ideias em espaços.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-samka-marrom/65">
              Desenvolvemos projetos que buscam equilíbrio entre
              estética, funcionalidade e identidade, considerando
              cada espaço de forma única.
            </p>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-3 border-b border-samka-marrom pb-2 text-sm uppercase tracking-[0.2em] text-samka-marrom transition hover:text-samka-terracota"
            >
              Fale sobre seu projeto
              <span>→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="min-h-[500px] overflow-hidden lg:min-h-[750px]"
        >
          <img
            src="/imagens/arquitetura.jpg"
            alt="Projeto de arquitetura"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      {/* INTERIORES */}
      <div
        id="interiores"
        className="mx-auto grid max-w-7xl lg:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="min-h-[500px] overflow-hidden lg:min-h-[750px]"
        >
          <img
            src="/imagens/interiores.jpg"
            alt="Projeto de interiores"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center bg-samka-bege px-6 py-20 md:px-12 md:py-28 lg:px-16"
        >
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-[0.35em] text-samka-terracota">
              02 • Interiores
            </span>

            <h2 className="mt-6 text-4xl font-medium leading-tight text-samka-marrom md:text-6xl">
              Cada detalhe também constrói uma experiência.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-samka-marrom/65">
              Criamos interiores que dialogam com a arquitetura
              e com a personalidade de quem vive o ambiente,
              valorizando materiais, proporções e sensações.
            </p>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-3 border-b border-samka-marrom pb-2 text-sm uppercase tracking-[0.2em] text-samka-marrom transition hover:text-samka-terracota"
            >
              Conheça nosso trabalho
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}