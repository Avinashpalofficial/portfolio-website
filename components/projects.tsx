"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce MERN Application",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, order management, payment integration, and admin dashboard. Features include product reviews, ratings, and advanced search filters.",
    image: "/projects/ecommerce.jpg",
    tags: [
      "Tailwind Css",
      "Framer Motion",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Context API (State Management)",
      "JWT",
      "REST API",
    ],
    liveUrl: "https://ecommerce-mern-murex-five.vercel.app/",
    githubUrl: "https://github.com/Avinashpalofficial/ecommerce-mern-",
    features: [
      "User authentication with JWT",
      "Shopping cart & checkout",
      "Admin dashboard",
      "Product reviews & ratings",
    ],
  },
  {
    title: "Runway Radar Dashboard",
    description:
      "A modern dashboard application for monitoring and tracking runway data. Built with a focus on real-time updates and intuitive data visualization for efficient runway management.",
    image: "/projects/runway.jpg",
    tags: [
      "React.js",
      "Zustand",
      "TanstackQuery",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://runway-radar.vercel.app/",
    githubUrl: "https://github.com/Avinashpalofficial/Runway_Radar",
    features: [
      "Real-time data tracking",
      "Interactive dashboard",
      "Data visualization",
      "Responsive design",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing my recent work in fullstack development. Each project
            demonstrates my ability to build complete, production-ready
            applications.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-none shadow-xl bg-card"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-br from-primary/20 to-accent/20 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:hidden" />
                </div>

                <CardContent
                  className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="gap-2">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="gap-2">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/Avinashpalofficial?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
