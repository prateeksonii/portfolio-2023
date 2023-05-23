import React from "react";

const technologies: string[] = [
  "Next",
  "Remix",
  "Astro",
  ".NET Core",
  "Spring",
  "Angular",
  "React",
  "Typescript",
  "Javascript",
  "C++",
];

export default function TechSection() {
  return (
    <section className="mx-auto container min-h-screen flex flex-col items-stretch justify-center">
      <h1 className="text-2xl uppercase tracking-widest border-b border-zinc-700 pb-4">
        Technologies I work with
      </h1>
      <ul className="gap-x-32 gap-y-8 pt-8 flex items-center flex-wrap grid grid-cols-4 text-8xl uppercase font-bold">
        {React.Children.toArray(technologies.map((tech) => <li>{tech}</li>))}
      </ul>
    </section>
  );
}
