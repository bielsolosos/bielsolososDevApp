"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5 text-primary" />,
      href: "mailto:bielrochasantoscoutinho@gmail.com",
      username: "bielrochasantoscoutinho@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5 text-primary" />,
      href: "https://github.com/bielsolosos",
      username: "bielsolosos",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      href: "https://www.linkedin.com/in/gabriel-coutinho-0763922a1/",
      username: "Gabriel Coutinho",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">#</span> Contato
        </h2>

        <div ref={ref} className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="lg:flex-1 max-w-lg mx-auto"
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Vamos conversar!</CardTitle>
                  <CardDescription>
                    Entre em contato através das redes sociais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition-colors"
                    >
                      <div>{link.icon}</div>
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-foreground/70">
                          {link.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* 
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1 max-w-lg mx-auto mt-8 lg:mt-0"
        >
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>
                Ficarei feliz em responder suas perguntas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Como posso ajudar?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Sua mensagem aqui..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        */}
          </div>
        </div>
      </div>
    </section>
  );
}
