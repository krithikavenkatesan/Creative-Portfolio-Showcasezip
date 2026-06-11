import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_22.26.36_1779948465791.jpeg";

const H = ({ children }: { children: string }) => (
  <span
    style={{
      background: "linear-gradient(90deg, #E8457A, #FF6B35)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-14 md:py-20 bg-[#FFF8F0] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Photo with decorative background */}
          <motion.div
            className="w-full md:w-[42%] flex justify-center relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Dot grid behind photo */}
            <div
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(232,69,122,0.15) 1.2px, transparent 1.2px)`,
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(ellipse 80% 85% at 40% 50%, black 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 40% 50%, black 30%, transparent 80%)",
              }}
            />

            {/* Floating decorative circles */}
            <motion.div
              className="absolute pointer-events-none hidden md:block"
              style={{ top: "8%", left: "2%", width: 56, height: 56 }}
              animate={isInView ? { y: ["0px", "-10px", "0px"] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill="none" stroke="#E8457A" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute pointer-events-none hidden md:block"
              style={{ bottom: "10%", left: "4%", width: 34, height: 34 }}
              animate={isInView ? { y: ["0px", "8px", "0px"] } : {}}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <svg width="34" height="34" viewBox="0 0 34 34">
                <circle cx="17" cy="17" r="14" fill="none" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" />
                <circle cx="17" cy="17" r="5" fill="#FF6B35" opacity="0.2" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute pointer-events-none hidden md:block rounded-full"
              style={{
                top: "18%", left: "-6%",
                width: 10, height: 10,
                background: "linear-gradient(135deg,#E8457A,#FF6B35)",
                opacity: 0.5,
              }}
              animate={isInView ? { scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] } : {}}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            <motion.div
              className="absolute pointer-events-none hidden md:block rounded-full"
              style={{
                bottom: "22%", left: "-4%",
                width: 7, height: 7,
                background: "#E8457A",
                opacity: 0.45,
              }}
              animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.45, 0.7, 0.45] } : {}}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />

            {/* Soft arc */}
            <motion.div
              className="absolute pointer-events-none hidden md:block"
              style={{ top: "50%", left: "-10%", transform: "translateY(-50%)" }}
              animate={isInView ? { rotate: [0, 8, 0] } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="48" height="96" viewBox="0 0 48 96">
                <path d="M44 4 Q4 48 44 92" fill="none" stroke="url(#arcG)" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
                <defs>
                  <linearGradient id="arcG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E8457A" />
                    <stop offset="100%" stopColor="#FF6B35" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Photo */}
            <div className="relative w-72 h-[400px] md:w-[340px] md:h-[460px]">
              <div
                className="absolute inset-0 transform rotate-6 translate-x-4 translate-y-4"
                style={{
                  background: "linear-gradient(135deg, #E8457A22, #FF6B3522)",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                }}
              />
              <img
                src={photoUrl}
                alt="Krithika Venkatesan"
                className="relative w-full h-full object-cover shadow-xl"
                style={{
                  borderRadius: "48% 52% 60% 40% / 55% 45% 55% 45%",
                  objectPosition: "center top",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            className="w-full md:w-[58%] flex flex-col items-start"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative mb-7">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                A bit about{" "}
                <span className="text-gradient-accent">myself.</span>
              </h2>
              <div
                className="mt-3 h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
              />
            </div>

            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-5">
              Hi, I'm Krithika, an engineering graduate who loves{" "}
              <H>breaking complex things into simple ideas</H> and turning them into{" "}
              <H>storytelling</H> and yapping about my insights for hours. I analyse how users think, behave, and interact and dig into insights beyond just surface level observations.
            </p>

            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-5">
              I also <H>write and publish analytics related content</H> for fun. Over the past year I've worked on <H>real world projects</H> and with NGOs, helping teams make better decisions for their organizations.
            </p>

            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-8">
              I've also pitched my own <H>startup idea</H> and made it to the{" "}
              <H>finalist stage</H>, honestly one of my proudest achievements so far.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Real-world projects", "NGO impact work", "Startup finalist", "Analytics writer"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-4 py-2 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #E8457A12, #FF6B3512)",
                    border: "1px solid #E8457A25",
                    color: "#E8457A",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
