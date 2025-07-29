import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AiQuote from "../ai-quote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full">
       <div className="absolute inset-0 -z-10 bg-black">
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>
          <div className="blob blob-6"></div>
          <div className="blob blob-7"></div>
        </div>
        <div className="noise-overlay"></div>
      </div>
      <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <Avatar className="w-32 h-32 mb-6 border-4 border-primary/50">
          <AvatarImage src="https://placehold.co/200x200.png" alt="Debanga Dutta" data-ai-hint="man portrait" />
          <AvatarFallback>DD</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Debanga Dutta
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Coder | Storyteller | Visual Creator
        </p>
        <div className="mt-8">
          <AiQuote />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
