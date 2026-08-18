"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Samila Freitas",
    role: "Arquiteta e Urbanista",
    image: "/equipe/socia-01.jpg",
  },
  {
    name: "Karisia Viana",
    role: "Arquiteta e Urbanista",
    image: "/equipe/socia-02.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-samka-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 border-b border-samka-marrom/20 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-samka-terracota">
              Quem faz a SAMKA
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-samka-marrom md:text-6xl">
              Arquitetura feita por pessoas.
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-samka-marrom/65 md:justify-self-end">
            Duas perspectivas que se encontram para criar espaços
            com identidade, sensibilidade e propósito.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8">
          {team.map((person, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
            >
              <div className="group overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-[680px]"
                />
              </div>

              <div className="mt-7 flex items-start justify-between gap-6 border-t border-samka-marrom/20 pt-6">
                <div>
                  <h3 className="text-2xl font-medium text-samka-marrom md:text-3xl">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-samka-terracota">
                    {person.role}
                  </p>
                </div>

                <span className="text-sm text-samka-marrom/40">
                  0{index + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}