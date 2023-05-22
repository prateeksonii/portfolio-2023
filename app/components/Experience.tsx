import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <>
      <section
        className="mx-auto container h-screen flex flex-col items-stretch justify-center"
        id="experience"
      >
        <h1 className="text-2xl uppercase tracking-widest">Experience</h1>
        <p className="pt-8 leading-tight text-7xl tracking-tight font-head font-bold">
          Over <span className="text-orange-400">3 years</span> of experience in building and maintaining web applications and working with some of the most talented people in the business
        </p>
      </section>
      <section
        className="mx-auto container h-screen flex flex-col items-stretch justify-center"
      >
        <h1 className="text-2xl uppercase tracking-widest">History</h1>
        <ul className="pt-8">
          <ExperienceItem timeline="Now" title="Software Developer" company="MilesIT" />
          <ExperienceItem timeline="2021" title="Application Developer" company="IBM" />
          <ExperienceItem timeline="2020" title="Software Development Intern" company="Indshine" />
          <ExperienceItem timeline="2020" title="Frontend Development Intern" company="iAugmentor Labs" />
        </ul>
      </section>
    </>
  );
}
