import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Simulator } from "@/components/sections/Simulator";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Simulator />
      <Testimonials />
      <FAQ />
    </>
  );
}
