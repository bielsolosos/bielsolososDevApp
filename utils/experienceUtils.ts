import { Experience } from "@/components/experience";

class ExperienceUtils {
  public getData(): Experience[] {
    return [
      {
        title: "Desenvolvedor FullStack",
        company: "Vertis Solutions",
        period: "2024 - Presente",
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
      {
        title: "Garçom e Gerente de Restaurante",
        company: "Restaurante Família Scharder",
        period: "2021 - 2023",
        description: [
          "Comecei trabalhando como único garçom logo após a reabertura do restaurante em 2021, em um período de retomada pós-pandemia.",
          "Trabalhando diretamente com meu pai, fui responsável por estruturar e padronizar o atendimento ao público, garantindo qualidade e consistência desde o início do crescimento do negócio.",
          "Nos anos seguintes, gerenciei o restaurante durante eventos importantes como a Bauernfest, a tradicional festa do colono alemão em Petrópolis, coordenando equipes e garantindo a operação eficiente do local.",
        ],
        technologies: [
          "Atendimento ao cliente",
          "Gestão de equipes",
          "Padronização de processos",
          "Planejamento operacional",
          "Eventos e festivais",
        ],
      },
    ];
  }
}

export const experienceUtils = new ExperienceUtils();
