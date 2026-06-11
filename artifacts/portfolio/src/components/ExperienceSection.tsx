import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="experience" className="py-14 md:py-20 bg-[#FFF8F0] relative overflow-hidden">

      {/* Decorative right-side dot grid + glow */}
      <div className="absolute top-0 right-0 bottom-0 w-[34%] pointer-events-none hidden lg:block">
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(232,69,122,0.13) 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 70% at 60% 45%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 60% 45%, black 20%, transparent 75%)",
          }}
        />
        {/* soft glow blob */}
        <div
          className="absolute"
          style={{
            top: "20%", left: "10%",
            width: 260, height: 260,
            background: "radial-gradient(circle, rgba(232,69,122,0.09) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* floating circles */}
        <motion.svg
          className="absolute"
          style={{ top: "15%", right: "18%" }}
          width="64" height="64" viewBox="0 0 64 64"
          animate={isInView ? { y: ["0px", "-12px", "0px"] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="32" cy="32" r="28" fill="none" stroke="#E8457A" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.28" />
        </motion.svg>

        <motion.svg
          className="absolute"
          style={{ bottom: "22%", right: "28%" }}
          width="36" height="36" viewBox="0 0 36 36"
          animate={isInView ? { y: ["0px", "9px", "0px"] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="18" cy="18" r="15" fill="none" stroke="#FF6B35" strokeWidth="1.2" opacity="0.25" />
          <circle cx="18" cy="18" r="5" fill="#FF6B35" opacity="0.15" />
        </motion.svg>

        <motion.div
          className="absolute rounded-full"
          style={{ top: "38%", right: "20%", width: 10, height: 10, background: "linear-gradient(135deg,#E8457A,#FF6B35)", opacity: 0.45 }}
          animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.45, 0.7, 0.45] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ bottom: "35%", right: "14%", width: 7, height: 7, background: "#E8457A", opacity: 0.35 }}
          animate={isInView ? { scale: [1, 1.6, 1], opacity: [0.35, 0.6, 0.35] } : {}}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />

        {/* Curved arc */}
        <motion.svg
          className="absolute"
          style={{ top: "50%", right: "8%", transform: "translateY(-50%)" }}
          width="48" height="110" viewBox="0 0 48 110"
          animate={isInView ? { rotate: [0, -6, 0] } : {}}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M4 4 Q44 55 4 106" fill="none" stroke="url(#expArc)" strokeWidth="1.4" strokeLinecap="round" opacity="0.3" />
          <defs>
            <linearGradient id="expArc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8457A" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
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
