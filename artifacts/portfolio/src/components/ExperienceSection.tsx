import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "SEP 2025 – PRESENT",
    role: "Power BI & Reporting Analyst",
    company: "Mozambikes (Volunteer)",
    bullets: [
      "Consolidated 15+ years of financial, donation, and impact data from 6+ Excel and CSV files into one Power BI system, improving data accuracy and simplifying performance reporting",
      "Built 4+ automated trackers with pivot tables to monitor collection targets and report metrics for weekly reviews",
      "Designed dashboards for external stakeholders to support fundraising and training discussions, with 5+ dashboards covering 12+ KPIs",
      "Created user guides and delivered hands-on training to enable independent progress tracking across the team",
    ],
  },
  {
    date: "AUG 2025 – SEP 2025",
    role: "Data Analyst Intern",
    company: "Innovative Technology Strategies",
    bullets: [
      "Designed pre and post program surveys with outcome-based KPIs, improving response and completion rates",
      "Mapped participant journeys from onboarding to completion using engagement metrics",
      "Reduced transcript processing time by 40% using Python to extract and clean YouTube transcripts, enabling faster program impact reporting",
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
    <section id="experience" className="py-14 md:py-20 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-16"
          >
            Where I've Worked
          </motion.h2>

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
                  {/* Gradient dot */}
                  <div
                    className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ring-4 ring-[#FFF8F0]"
                    style={{ background: "linear-gradient(135deg, #E8457A, #FF6B35)" }}
                  />

                  <div className="flex flex-col mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-accent"
                      style={{ fontWeight: 700 }}
                    >
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1A1A1A]">
                      {exp.role}
                    </h3>
                    <span className="italic text-[#6B6B6B] mt-1 text-sm font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start text-[#1A1A1A] text-[0.95rem] leading-[1.7]">
                        <span
                          className="font-bold mr-3 mt-[2px] shrink-0 text-gradient-accent"
                        >
                          →
                        </span>
                        <span>{bullet}</span>
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
