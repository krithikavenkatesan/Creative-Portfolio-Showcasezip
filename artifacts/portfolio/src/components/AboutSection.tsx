import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_22.26.36_1779948465791.jpeg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFF8F0] overflow-hidden" ref={ref}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT — Photo */}
          <motion.div 
            className="w-full md:w-[40%] flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="relative w-64 h-72 md:w-80 md:h-96">
              {/* Subtle pink/accent shape behind */}
              <div 
                className="absolute inset-0 bg-[#F9B5AC]/30 transform rotate-6 translate-x-4 translate-y-4"
                style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
              />
              <img
                src={photoUrl}
                alt="Krithika Venkatesan"
                className="relative w-full h-full object-cover shadow-xl"
                style={{
                  borderRadius: "48% 52% 60% 40% / 55% 45% 55% 45%",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div 
            className="w-full md:w-[60%] flex flex-col items-start"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B6B6B] mb-3">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-8">
              A bit about myself.
            </h2>
            <div className="text-[#1A1A1A] font-sans text-lg md:text-[1.15rem] leading-[1.8] space-y-6">
              <p>
                I'm an engineering graduate who loves breaking complex things into simple ideas and turning them into storytelling — and yapping about my insights for hours. I genuinely enjoy analysing how users think, behave, and interact, understanding decisions beyond just surface-level observations. I also write and publish analytics-related content for fun.
              </p>
              <p>
                Over the past year I've worked on real-world projects and with NGOs, helping teams make better decisions for their organizations. I've also pitched my own startup idea and made it to the finalist stage — honestly one of my proudest achievements so far.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
