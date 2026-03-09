import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Hobbies } from "@/components/sections/Hobbies";
import { Footer } from "@/components/sections/Footer";
import { ParticleCanvas } from "@/components/canvas/ParticleCanvas";
import { SHOW_HOBBIES } from "@/data/config";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed particle canvas behind everything */}
      <ParticleCanvas />

      <div className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        {SHOW_HOBBIES && <Hobbies />}
        <Footer />
      </div>
    </main>
  );
}
