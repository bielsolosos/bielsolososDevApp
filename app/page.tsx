import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { experienceUtils } from "@/utils/experienceUtils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience experiences={experienceUtils.getData()} />
        <Skills />
        <Education />
        {
          //TODO terminar projetos para colocar aqui
          /*<Projects projects={projectUtils.getData()} />*/
        }
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
