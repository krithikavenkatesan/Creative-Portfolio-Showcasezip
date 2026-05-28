import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div id="projects" className="min-h-[10vh]"></div>
      <ExperienceSection />
      <BlogsSection />
      <ContactFooter />
    </main>
  );
}
