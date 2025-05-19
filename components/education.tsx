"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const education = [
    {
      title: "Engenharia de Software",
      institution: "Universidade",
      period: "Em andamento",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      description:
        "Curso superior em Engenharia de Software, com foco em desenvolvimento de software, arquitetura e gestão de projetos.",
    },
    {
      title: "Residência em TIC Software",
      institution: "SerraTec",
      period: "Concluído",
      icon: <Award className="h-6 w-6 text-primary" />,
      description:
        "Mais de 700 horas de formação intensiva focada em Java com Spring Boot no back-end e React (incluindo React Native) no front-end.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Formação
        </h2>

        <div ref={ref} className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="mt-1 rounded-full p-2 bg-primary/10">{item.icon}</div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>
                      {item.institution} • {item.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
