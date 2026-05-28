import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiMedium } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FloatingShapes } from "./FloatingShapes";
import resumeUrl from "@assets/KrithikaVenkatesan_Resume_1779947361301.pdf";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_20.38.22_1779947524537.jpeg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloatingShapes />

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT — text */}
          <motion.div
            className="flex-1 flex flex-col items-start z-10 max-w-xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item} className="text-base md:text-lg font-medium text-[#6B6B6B] mb-4 tracking-wide">
              Hi, I'm Krithika.
            </motion.p>

            <motion.div variants={item} className="mb-6">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Data Analyst.
              </h1>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-[1.1] tracking-tight">
                Storytelling.
              </h1>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-[1.1] tracking-tight">
                &amp; Product Thinking.
              </h1>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-2">
              <Button
                asChild
                size="lg"
                className="text-sm h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-white"
              >
                <a href={resumeUrl} download="KrithikaVenkatesan_Resume.pdf">
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm h-12 px-7 rounded-full border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FFF8F0]"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Say Hi
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div
            className="flex-1 flex justify-center items-center z-10 w-full"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.25 }}
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Blob background — soft pink oval */}
              <motion.div
                animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute"
                style={{
                  inset: "-16px -12px -16px -12px",
                  background: "radial-gradient(ellipse at 55% 50%, #F9C9C7 0%, #F5A9A9 45%, #F0C0C0 100%)",
                  borderRadius: "61% 39% 52% 48% / 44% 55% 45% 56%",
                  filter: "blur(0px)",
                  zIndex: 0,
                }}
              />
              {/* Photo with matching blob clip */}
              <img
                src={photoUrl}
                alt="Krithika Venkatesan"
                className="relative w-full h-full object-cover shadow-xl"
                style={{
                  borderRadius: "61% 39% 52% 48% / 44% 55% 45% 56%",
                  zIndex: 1,
                  objectPosition: "center top",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
