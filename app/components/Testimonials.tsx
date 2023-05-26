export default function TestimonialsSection() {
  return (
    <section className="mx-auto container min-h-screen flex flex-col items-stretch justify-center">
      <h1 className="text-2xl uppercase tracking-widest border-b border-zinc-700 pb-4">
        What they said
      </h1>
      <ul className="pt-8 flex flex-col">
        <li className="flex flex-col gap-4 py-32 border-b border-zinc-700">
          <span className="text-3xl md:text-7xl font-bold font-head">
            "He works better than most of our senior developers."
          </span>
          <span className="text-lg md:text-2xl tracking-wider">
            - Krishna Moorthy, Senior Architect at IBM
          </span>
        </li>
        <li className="flex flex-col gap-4 py-32">
          <span className="text-3xl md:text-7xl font-bold font-head">
            "Never heard a bad thing about him."
          </span>
          <span className="text-lg md:text-2xl tracking-wider">
            - Kyle Saul, Senior Software Developer at MilesIT
          </span>
        </li>
      </ul>
    </section>
  );
}
