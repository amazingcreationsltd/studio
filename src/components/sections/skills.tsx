import { Code, Bot, PenTool, GitBranch, HeartHandshake, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as React from 'react';

const techSkills = [
  { name: "Java", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Python", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "AI/ML", icon: <Bot className="h-8 w-8 text-primary" /> },
  { name: "UI/UX Design", icon: <PenTool className="h-8 w-8 text-primary" /> },
  { name: "Git & GitHub", icon: <GitBranch className="h-8 w-8 text-primary" /> },
];

const softSkills = [
  { name: "Team Collaboration", icon: <Users className="h-8 w-8 text-primary" /> },
  { name: "Problem Solving", icon: <Lightbulb className="h-8 w-8 text-primary" /> },
  { name: "Communication", icon: <HeartHandshake className="h-8 w-8 text-primary" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">The tools and technologies I use to build things.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {techSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-center">
                    {skill.icon}
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-center">
                    {skill.icon}
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
