import { Form } from "@remix-run/react";

export default function ContactSection() {
  return (
    <div className="py-40 flex flex-col justify-center bg-zinc-950">
      <div className="mx-auto container">
        <h1 className="text-2xl pb-8 tracking-widest uppercase">
          Let&apos;s talk
        </h1>
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com/in/prateeksoni47"
              className="text-4xl md:text-5xl font-head uppercase font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://linkedin.com/in/prateeksoni47"
              className="text-4xl md:text-5xl font-head uppercase font-bold"
            >
              Github
            </a>
          </div>
          <div>
            <div>
              <h4 className="text-xl font-bold">Email</h4>
              <p className="text-zinc-400 text-xl">prateek_soni@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
