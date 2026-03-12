"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Available for opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Avinash Pal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Fullstack Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          I specialize in building scalable web applications using the MERN stack. 
          Passionate about creating elegant solutions and delivering exceptional user experiences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" asChild className="gap-2">
            <Link href="#projects">
              View Projects
              <ArrowDown className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://github.com/Avinashpalofficial" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://linkedin.com/in/avinashpal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="mailto:avinash@example.com">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
