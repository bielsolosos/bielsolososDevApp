import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Dev Portfolio. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
