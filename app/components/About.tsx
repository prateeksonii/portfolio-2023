import Balancer from "react-wrap-balancer";

export default function AboutSection() {
  return (
    <>
      <section
        className="mx-auto container h-screen flex flex-col items-center justify-center"
        id="about"
      >
        <div>
          <h1 className="text-2xl uppercase tracking-widest">About me</h1>
          <p className="pt-8 font-head font-bold text-7xl">
            <Balancer>
              I&apos;m a <span className="text-orange-400">full-stack</span> web
              developer with strong focus on creating{" "}
              <span className="text-orange-400">scalable</span> and{" "}
              <span className="text-orange-400">maintainable</span>{" "}
              applications.
            </Balancer>
          </p>
        </div>
      </section>
      <section
        className="mx-auto container h-screen flex flex-col items-stretch justify-center"
        id="about"
      >
        <div>
          <h1 className="text-2xl uppercase tracking-widest">What I do</h1>
          <ul className="pt-8">
            <li className="flex items-center justify-between gap-8 border-t border-b border-zinc-700">
              <h2 className="text-8xl font-head uppercase font-bold">Frontend</h2>
              <p className="text-xl">I can build beautiful and responsive frontend</p>
            </li>
            <li className="flex items-center justify-between gap-8 border-t border-b border-zinc-700">
              <h2 className="text-8xl font-head uppercase font-bold">Backend</h2>
              <p className="text-xl">I can build highly performant and scalable backends.</p>
            </li>
            <li className="flex items-center justify-between gap-8 border-t border-b border-zinc-700">
              <h2 className="text-8xl font-head uppercase font-bold">UI/UX</h2>
              <p className="text-xl">I know the basics of designing with Figma.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
