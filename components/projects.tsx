"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// Define the Project type for better type safety
export type Project = {
  title: string
  description: string
  image?: string
  technologies: string[]
  github?: string
  demo?: string
}

interface ProjectsProps {
  projects?: Project[]
}

// Sample projects data that can be overridden by props
const defaultProjects: Project[] = [
  {
    title: "FastAPI OAuth2 Authentication",
    description: "Projeto pessoal para estudo de autenticação OAuth2 com FastAPI e documentação com Swagger.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Python", "FastAPI", "OAuth2", "Swagger"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Warehouse Dashboard",
    description:
      "Dashboard interativo para visualização de dados de um Data Warehouse, desenvolvido com Spring Boot e Angular.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Microservices Architecture",
    description: "Migração de um sistema monolítico para uma arquitetura de microserviços com Java 8 e Eureka.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Java", "Spring Boot", "Microservices", "Eureka"],
    demo: "#",
  },
]

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Projetos
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                {project.image && (
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
