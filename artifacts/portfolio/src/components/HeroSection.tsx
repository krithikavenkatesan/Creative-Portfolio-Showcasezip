import { motion } from "framer-motion";
import { FloatingShapes } from "./FloatingShapes";
import resumeUrl from "@assets/KrithikaVenkatesan_Resume_1779947361301.pdf";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_20.38.22_1779947524537.jpeg";

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

      <div className="max-w-6xl mx-auto w-full px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">

          {/* LEFT — text */}
          <motion.div
            className="flex-1 flex flex-col items-start z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-[14px] font-medium text-[#6B6B6B] mb-3 tracking-wide"
            >
              Hi, I'm Krithika.
            </motion.p>

            <motion.div variants={item} className="mb-7">
              <h1 className="text-6xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight">
                Data Analyst
              </h1>
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-[1.2] tracking-tight mt-2 whitespace-nowrap text-gradient-accent"
              >
                Storytelling &amp; Product Thinking.
              </h2>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a
                href={resumeUrl}
                download="KrithikaVenkatesan_Resume.pdf"
                className="inline-flex items-center justify-center text-sm font-bold h-12 px-7 rounded-full btn-gradient"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center text-sm font-bold h-12 px-7 rounded-full btn-gradient-outline"
              >
                Say Hi
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div
            className="flex-shrink-0 flex justify-center items-center z-10"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.25 }}
          >
            <div className="relative w-80 h-96 md:w-[360px] md:h-[430px]">
              <motion.div
                animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute"
                style={{
                  inset: "-16px -12px -16px -12px",
                  background: "radial-gradient(ellipse at 55% 50%, #F9C9C7 0%, #F5A9A9 45%, #F0C0C0 100%)",
                  borderRadius: "61% 39% 52% 48% / 44% 55% 45% 56%",
                  zIndex: 0,
                }}
              />
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
