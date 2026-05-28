import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      {/* We are only building Hero and Footer for now, but leaving space for future sections */}
      <div id="about" className="min-h-[10vh]"></div>
      <div id="projects" className="min-h-[10vh]"></div>
      <div id="experience" className="min-h-[10vh]"></div>
      <div id="blogs" className="min-h-[10vh]"></div>
      <ContactFooter />
    </main>
  );
}
