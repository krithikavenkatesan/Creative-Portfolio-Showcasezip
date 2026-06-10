import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_22.26.36_1779948465791.jpeg";

const H = ({ children }: { children: string }) => (
  <span style={{ color: "#E8457A", fontWeight: 700 }}>{children}</span>
);

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-14 md:py-20 bg-[#FFF8F0] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Photo */}
          <motion.div
            className="w-full md:w-[42%] flex justify-center relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
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

            {/* Para 1 */}
            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-5">
              Hi, I'm Krithika, an engineering graduate who loves{" "}
              <H>breaking complex things into simple ideas</H> and turning them into{" "}
              <H>storytelling</H> and yapping about my insights for hours. I analyse how users think, behave, and interact and dig into insights beyond just surface level observations.
            </p>

            {/* Para 2 */}
            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-5">
              I also <H>write and publish analytics related content</H> for fun. Over the past year I've worked on <H>real world projects</H> and with NGOs, helping teams make better decisions for their organizations.
            </p>

            {/* Para 3 */}
            <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.85] mb-8">
              I've also pitched my own <H>startup idea</H> and made it to the{" "}
              <H>finalist stage</H>, honestly one of my proudest achievements so far.
            </p>

            {/* Tags */}
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
