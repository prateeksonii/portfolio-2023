import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AboutSection from "~/components/About";
import ContactSection from "~/components/Contact";
import ExperienceSection from "~/components/Experience";
import HeroSection from "~/components/Hero";
import TechSection from "~/components/Tech";
import TestimonialsSection from "~/components/Testimonials";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Prateek Soni" }];
};

export default function Index() {
  return (
    <main>
      <nav className="fixed top-8 bottom-8 right-32 md:right-8">
        <ul className="text-md md:text-2xl leading-normal">
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="#about">About</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="#experience">Experience</Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <TechSection />
      <ContactSection />
    </main>
  );
}
