import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Footer } from "@/components/sections/Footer";
import { ParticleCanvas } from "@/components/canvas/ParticleCanvas";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed particle canvas behind everything */}
      <ParticleCanvas />

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Footer />
      </div>
    </main>
  );
}
