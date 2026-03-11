import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Background3D } from "@/components/ui/Background3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-void relative">
      <Background3D />
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <ProjectShowcase />
        <TimelineSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
