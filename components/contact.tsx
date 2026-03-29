"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <Link
                  href="mailto:apal73451@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      apal73451@gmail.com
                    </p>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Link
                      href="https://github.com/Avinashpalofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Link
                      href="https://linkedin.com/in/avinashpal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Link href="mailto:apal73451@gmail.com">
                      <Mail className="w-5 h-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="mb-6">
                <Send className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">
                  Ready to start a project?
                </h3>
                <p className="opacity-90 leading-relaxed">
                  Let&apos;s collaborate to bring your ideas to life. Whether
                  you need a new website, web application, or want to improve an
                  existing project, I&apos;m here to help.
                </p>
              </div>

              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="mailto:apal73451@gmail.com" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Send me an email
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
