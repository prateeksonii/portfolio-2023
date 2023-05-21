import type { V2_MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/Hero";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Prateek Soni" }];
};

export default function Index() {
  return (
    <main className="">
      <nav className="fixed top-8 bottom-8 right-8">
        <ul className="text-2xl leading-normal">
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Experience</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <HeroSection />
      <section className="mx-auto container h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl uppercase tracking-widest">About me</h1>
          <p className="pt-8 font-head font-bold text-7xl">
            I&apos;m a <span className="text-orange-400">full-stack</span> web
            developer with strong focus on creating{" "}
            <span className="text-orange-400">scalable</span> and{" "}
            <span className="text-orange-400">maintainable</span> applications.
          </p>
        </div>
      </section>
    </main>
  );
}
