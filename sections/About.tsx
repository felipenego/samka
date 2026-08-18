"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-samka-marrom py-24 text-samka-ivory md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-samka-bege">
              Sobre a SAMKA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-8"
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-tight md:text-6xl">
              Projetamos espaços para serem vividos, sentidos e lembrados.
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-samka-ivory/70">
                A SAMKA acredita na arquitetura como uma forma de
                transformar espaços em experiências, buscando equilíbrio
                entre estética, funcionalidade e identidade.
              </p>

              <p className="text-lg leading-relaxed text-samka-ivory/70">
                Cada projeto parte de uma escuta cuidadosa para compreender
                necessidades, referências e maneiras de viver, criando
                soluções únicas para cada contexto.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}