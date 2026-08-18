"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conversa",
    description:
      "O primeiro encontro para compreender necessidades, expectativas, referências e a forma como cada espaço será vivido.",
  },
  {
    number: "02",
    title: "Conceito",
    description:
      "Transformamos as primeiras ideias em uma direção criativa que orienta as escolhas e a identidade do projeto.",
  },
  {
    number: "03",
    title: "Projeto",
    description:
      "Desenvolvemos soluções que conectam estética, funcionalidade, proporção e experiência.",
  },
  {
    number: "04",
    title: "Detalhamento",
    description:
      "Materiais, acabamentos e soluções são definidos para que cada elemento converse com o conjunto.",
  },
  {
    number: "05",
    title: "Realização",
    description:
      "O projeto ganha forma, preservando as decisões e a essência construídas ao longo de todo o processo.",
  },
];

export default function Process() {
  return (
    <section className="bg-samka-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-samka-terracota">
              Nosso processo
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight text-samka-marrom md:text-6xl">
              Do primeiro encontro à realização.
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-samka-marrom/65 md:justify-self-end">
            Um processo construído em etapas para transformar ideias
            em espaços coerentes com cada história.
          </p>
        </div>

        <div className="mt-20 border-t border-samka-marrom/20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="grid gap-5 border-b border-samka-marrom/20 py-10 md:grid-cols-12 md:items-start"
            >
              <span className="text-sm text-samka-terracota md:col-span-2">
                {step.number}
              </span>

              <h3 className="text-3xl font-medium text-samka-marrom md:col-span-4 md:text-4xl">
                {step.title}
              </h3>

              <p className="max-w-xl leading-relaxed text-samka-marrom/65 md:col-span-6">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}