import { motion } from "framer-motion";
import { SiGithub, SiMedium } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import resumeUrl from "@assets/KrithikaVenkatesan_Resume_1779947361301.pdf";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_20.38.22_1779947524537.jpeg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <motion.div 
            className="flex-1 flex flex-col items-start z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 variants={item} className="text-xl md:text-2xl font-medium text-foreground mb-4">
              Hi, I'm Krithika.
            </motion.h2>
            
            <motion.h1 variants={item} className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-tight tracking-tight mb-6">
              Data <span className="text-primary">Analyst.</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg">
              Turning messy data into clear decisions.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
              <Button asChild size="lg" className="text-base h-14 px-8 rounded-full">
                <a href={resumeUrl} download="KrithikaVenkatesan_Resume.pdf">
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-14 px-8 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background">
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Say Hi
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={item} className="flex items-center gap-6">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/krithika-venkatesann/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://medium.com/@krithikavenkatesannn" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiMedium className="w-6 h-6" />
                <span className="sr-only">Medium</span>
              </a>
              <a href="mailto:krithikaa.venkatesan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center md:justify-end z-10 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-6 scale-105 transition-transform duration-500 hover:rotate-12"></div>
              <img 
                src={photoUrl} 
                alt="Krithika Venkatesan" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-background"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
