import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function BulletText({ text }: { text: string }) {
  const parts = text.split(/(\d+[\+\%KM]?(?:\s*years?)?(?:\s*\+)?|\d{2,})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d/.test(part) ? (
          <strong
            key={i}
            style={{
              background: "linear-gradient(90deg, #E8457A, #FF6B35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
            }}
          >{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const experiences = [
  {
    date: "SEP 2025 – PRESENT",
    role: "Data Analyst",
    company: "Mozambikes · Volunteer",
    bullets: [
      "Consolidated 15+ years of financial, donation, revenue, and impact data from 6+ Excel and CSV files into one Power BI system, improving data accuracy and simplifying performance reporting",
      "Built 4+ automated trackers with pivot tables to monitor collections, targets, and impact metrics for weekly reviews",
      "Performed data modeling and transformation to build 5+ dashboards with 12+ KPIs covering growth trends, employee performance, funding activity, and impact outcomes",
      "Designed dashboards for external stakeholders to support fundraising and donor discussions; created user guides and delivered hands-on training",
    ],
  },
  {
    date: "AUG 2025 – SEP 2025",
    role: "BI & Reporting Analyst Intern",
    company: "Innovative Technology Strategies",
    bullets: [
      "Collaborated with cross-functional teams to design pre- and post-program surveys with outcome-based KPIs, improving response and completion rates",
      "Supported program operations by collecting participant demographic data, analysing engagement metrics, and mapping participant journeys from onboarding to completion",
      "Reduced transcript processing time by 40% by extracting YouTube transcripts and using Python to clean and preprocess raw text, enabling downstream analysis for program impact reporting",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section
      id="experience"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse(null)}
      className="py-14 md:py-20 bg-[#FFF8F0] relative overflow-hidden"
    >
      {/* Line grid — right side, radial fade from all edges */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: 0, bottom: 0, right: "-4%", width: "50%",
          backgroundImage: `
            linear-gradient(rgba(232,69,122,0.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,69,122,0.11) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 55% 50% at 65% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at 65% 50%, black 0%, transparent 65%)",
        }}
      />

      {/* Mouse spotlight — right side only */}
      {mouse && (
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px,
              rgba(255,107,53,0.18) 0%,
              rgba(232,69,122,0.10) 40%,
              transparent 70%)`,
            maskImage: "linear-gradient(to left, black 0%, black 36%, transparent 58%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, black 36%, transparent 58%)",
            zIndex: 1,
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative" style={{ zIndex: 2 }}>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
              Where I've{" "}
              <span className="text-gradient-accent">Worked</span>
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
            />
          </motion.div>

          <div className="max-w-3xl">
            <div
              className="relative ml-3 space-y-14"
              style={{
                borderLeft: "2px solid transparent",
                borderImage: "linear-gradient(180deg, #E8457A, #FF6B35) 1",
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-10">
                  <div
                    className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ring-4 ring-[#FFF8F0]"
                    style={{ background: "linear-gradient(135deg, #E8457A, #FF6B35)" }}
                  />
                  <div className="flex flex-col mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-accent">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1A1A1A]">{exp.role}</h3>
                    <span className="italic text-[#6B6B6B] mt-1 text-sm font-medium">{exp.company}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start text-[#1A1A1A] text-[0.95rem] leading-[1.7]">
                        <span className="font-bold mr-3 mt-[2px] shrink-0 text-gradient-accent">→</span>
                        <span><BulletText text={bullet} /></span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
