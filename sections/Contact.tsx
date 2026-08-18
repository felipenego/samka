"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-samka-terracota py-24 text-samka-ivory md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-samka-offwhite/80">
          Comece seu projeto
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="max-w-5xl text-5xl font-medium leading-[1.05] md:text-7xl lg:text-8xl">
              Vamos transformar seu espaço?
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-lg leading-relaxed text-samka-ivory/75">
              Conte um pouco sobre suas ideias e descubra como podemos
              construir juntos um projeto com identidade.
            </p>

            <a 
            href="https://wa.me/5585989711043"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-samka-ivory px-8 py-4 font-medium text-samka-marrom transition duration-300 hover:bg-samka-bege"
            >
              Falar com a SAMKA
              </a>
              
              <p className="mt-4 text-sm tracking-wide text-samka-ivory/60">
              WhatsApp • (85) 98971-1043
              </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}