import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AboutSection from "~/components/About";
import ExperienceSection from "~/components/Experience";
import HeroSection from "~/components/Hero";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Prateek Soni" }];
};

export default function Index() {
  return (
    <main>
      <nav className="fixed top-8 bottom-8 right-8">
        <ul className="text-2xl leading-normal">
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="#about">About</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Experience</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}