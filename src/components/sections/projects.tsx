import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "An experimental project exploring convolutional neural networks to classify images with high accuracy. Built with Python, TensorFlow, and Keras.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["ML", "Python", "AI"],
    githubUrl: "#",
    dataAiHint: "abstract neural network"
  },
  {
    title: "E-commerce UI/UX Design",
    description: "A complete UI/UX design for a modern e-commerce platform, focusing on a clean user flow and minimalist aesthetic. Designed in Figma.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["UI/UX", "Figma"],
    githubUrl: "#",
    dataAiHint: "ecommerce interface design"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with Next.js and Tailwind CSS, featuring a sleek design and smooth animations.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["React", "Next.js", "Web Dev"],
    githubUrl: "#",
    dataAiHint: "website design code"
  },
  {
    title: "Urban Photography Series",
    description: "A collection of photographs capturing the essence of city life, focusing on architecture, light, and shadow. Edited in Lightroom.",
    imageUrl: "https://placehold.co/400x300.png",
    tags: ["Photography", "Art"],
    githubUrl: "#",
    dataAiHint: "urban photography"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work across different fields.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card/50 backdrop-blur-lg border-border/20 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader className="p-0">
                <Image src={project.imageUrl} alt={project.title} width={400} height={300} className="w-full aspect-[4/3] object-cover" data-ai-hint={project.dataAiHint} />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
