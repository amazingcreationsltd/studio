import * as React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: <Github />, url: "#" },
  { name: "LinkedIn", icon: <Linkedin />, url: "#" },
  { name: "Instagram", icon: <Instagram />, url: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-3xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="mt-10 flex justify-center gap-6">
          {socialLinks.map((link) => (
            <Button key={link.name} asChild variant="outline" size="icon" className="h-14 w-14 rounded-full">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {React.cloneElement(link.icon, { className: 'h-6 w-6' })}
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
           <Button asChild variant="outline" size="icon" className="h-14 w-14 rounded-full">
              <Link href="mailto:example@example.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
        </div>
        
        <div className="mt-12">
            <Button asChild size="lg">
                <Link href="#" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download My Resume
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
