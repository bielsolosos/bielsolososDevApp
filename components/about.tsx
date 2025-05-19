"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary">#</span> Sobre Mim
          </h2>

          <div className="space-y-6 text-foreground/80">
            <p>
              <strong>
                Sou Gabriel Coutinho, Desenvolvedor FullStack, com foco em
                resolver problemas e criar soluções digitais que funcionam de
                verdade.
              </strong>
            </p>

            <p>
              Minha trajetória começou fora da tecnologia, no restaurante da
              minha família, onde aprendi a pensar rápido, assumir
              responsabilidade e lidar com pressão desde cedo. Essa experiência
              moldou meu jeito de trabalhar: prático, objetivo e comprometido
              com resultados.
            </p>

            <p>
              Participei da residência em TIC Software pelo SerraTec, uma
              formação intensiva com mais de 700 horas, onde aprendi a trabalhar
              com desenvolvimento Back-end, Front-end e Mobile. Logo após, atuei
              em projetos reais, com foco em sistemas distribuídos e arquitetura
              de microsserviços — lidando com integrações, refatoração de código
              legado e construção de soluções escaláveis e eficientes.
            </p>

            <p>
              Atualmente, continuo evoluindo por meio de projetos pessoais, onde
              coloco em prática tudo que venho aprendendo — da construção de
              interfaces à criação de sistemas completos. Levo comigo a
              mentalidade de sempre buscar clareza, utilidade e impacto real em
              tudo o que desenvolvo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
