"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Residencial",
    category: "Arquitetura",
    image: "/projetos/projeto-01.jpg",
  },
  {
    number: "02",
    title: "Interiores",
    category: "Design de Interiores",
    image: "/projetos/projeto-02.jpg",
  },
  {
    number: "03",
    title: "Espaços com identidade",
    category: "Arquitetura + Interiores",
    image: "/projetos/projeto-03.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-samka-ivory py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* CABEÇALHO */}
        <div className="grid gap-8 border-b border-samka-marrom/20 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-samka-terracota">
              Projetos
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-samka-marrom md:text-6xl">
              Arquitetura que nasce de cada história.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-samka-marrom/65 md:justify-self-end md:text-lg">
            Cada projeto é desenvolvido a partir das necessidades,
            referências e experiências de quem irá viver o espaço.
          </p>
        </div>

        {/* PROJETOS */}
        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`grid gap-8 lg:grid-cols-12 lg:items-end ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGEM */}
                <div className="group overflow-hidden lg:col-span-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[600px]"
                  />
                </div>

                {/* INFORMAÇÕES */}
                <div className="lg:col-span-4 lg:px-6 lg:pb-6">
                  <span className="text-sm text-samka-terracota">
                    {project.number}
                  </span>

                  <h3 className="mt-4 text-3xl font-medium text-samka-marrom md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-samka-marrom/50">
                    {project.category}
                  </p>

                  <div className="mt-8 h-px w-16 bg-samka-terracota" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}