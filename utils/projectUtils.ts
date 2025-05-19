import { Project } from "@/components/projects";

class ProjectUtils {
  // Exemplo de como você pode adicionar novos projetos facilmente
  public getData(): Project[] {
    return [
      {
        title: "FastAPI OAuth2 Authentication",
        description:
          "Projeto pessoal para estudo de autenticação OAuth2 com FastAPI e documentação com Swagger.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Python", "FastAPI", "OAuth2", "Swagger"],
        github: "https://github.com/username/project1",
        demo: "https://demo-url.com/project1",
      },
      {
        title: "Data Warehouse Dashboard",
        description:
          "Dashboard interativo para visualização de dados de um Data Warehouse, desenvolvido com Spring Boot e Angular.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
        github: "https://github.com/username/project2",
      },
      {
        title: "Microservices Architecture",
        description:
          "Migração de um sistema monolítico para uma arquitetura de microserviços com Java 8 e Eureka.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Java", "Spring Boot", "Microservices", "Eureka"],
        demo: "https://demo-url.com/project3",
      },
      // Você pode adicionar mais projetos aqui facilmente
    ];
  }
}

export const projectUtils = new ProjectUtils();
