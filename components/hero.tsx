"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function handleScrollToContact() {
  const section = document.getElementById("contact");
  section?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Gabriel Coutinho
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              Desenvolvedor FullStack
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/80 max-w-2xl mb-8"
          >
            Entregando soluções digitais com foco em clareza, utilidade e
            impacto real. Criando experiências que façam sentido pra quem usa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              className="text-foreground/80"
              onClick={handleScrollToContact}
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4 text-foreground/80" />{" "}
              <span>Contato</span>
            </Button>
            <Button
              className="text-foreground/80"
              onClick={() =>
                window.open("https://github.com/bielsolosos", "_blank")
              }
              size="lg"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button
              className="text-foreground/80"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gabriel-coutinho-0763922a1/",
                  "_blank"
                )
              }
              size="lg"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <a
                href="#about"
                className="text-foreground/60 hover:text-primary"
              >
                <ArrowDown className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
