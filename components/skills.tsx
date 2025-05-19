"use client";

import { motion, useInView } from "framer-motion";
import { Code, Cpu, Database, GitBranch, Globe, Server } from "lucide-react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Back-end",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        "Java",
        "Spring Boot",
        "JPA / Hibernate",
        "APIs REST",
        "FeignClient",
        "OAuth2",
      ],
    },
    {
      title: "Front-end",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["HTML", "CSS", "React", "Next.js", "AngularJS"],
    },
    {
      title: "Banco de Dados",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["PostgreSQL", "MySql", "SQL"],
    },
    {
      title: "DevOps",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["Docker", "Podman", "CI/CD"],
    },
    {
      title: "Linguagens",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Java", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Versionamento",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Habilidades & Tecnologias
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div>{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-foreground/80 flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
