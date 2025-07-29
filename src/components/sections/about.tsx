import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m Debanga Dutta, a Computer Science student from India with a deep passion for bringing ideas to life through code and design. My journey in tech is driven by a curiosity to understand how things work and a desire to create seamless, beautiful digital experiences.
            </p>
            <p className="mt-4 text-muted-foreground">
              From developing software solutions to crafting intuitive UI/UX designs, I find joy in the entire creative process. I am skilled in Java and Python, and I&apos;m currently diving into the exciting world of AI and Machine Learning. When I&apos;m not coding, you can find me behind a camera, capturing stories through photography and videography.
            </p>
             <p className="mt-4 text-muted-foreground">
              I believe in the power of storytelling to connect and inspire, and I strive to weave it into every project I undertake, whether it&apos;s a piece of software, a user interface, or a photograph.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/600x700.png"
              alt="About Debanga Dutta"
              width={600}
              height={700}
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              data-ai-hint="man working computer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
