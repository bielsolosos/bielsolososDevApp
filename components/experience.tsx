"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

interface ExperienceProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    title: "Desenvolvedor FullStack",
    company: "Vertis Solutions",
    period: "2022 - Presente",
    description: [
      "Spring + Angular (Java 17): Atuei na criação de um microserviço para um Data Warehouse, lidando com PostgreSQL, detalhamento de tabelas e construção de dashboards. Também trabalhei com formulários e rotas usando AngularJS.",
      "Spring + React (Next.js): Participei da migração de um sistema monolítico para arquitetura de microserviços (Java 8 + Eureka), refatorando código legado e desenvolvendo dashboards interativos e componentes visuais com React.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Angular",
      "PostgreSQL",
      "Microserviços",
    ],
  },
];

export function Experience({
  experiences = defaultExperiences,
}: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Experiência Profissional
        </h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-foreground/80">
                      {desc}
                    </p>
                  ))}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
