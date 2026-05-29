import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import abTestingImg from "@assets/ab_testing_preview_1779950998044.png";
import subsImg from "@assets/subs_preview_1779950998043.png";
import ecomImg from "@assets/ecom_preview_1779950998042.png";
import momChartImg from "@assets/image_1779986416128.png";

type Project = {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  stats: string[];
  dashboardUrl: string | null;
  githubUrl: string;
  caseStudy: {
    sections: { label: string; content: React.ReactNode }[];
  };
};

const projects: Project[] = [
  {
    id: "ab-testing",
    image: abTestingImg,
    tags: ["Excel", "Python", "Power BI"],
    title: "A/B Testing — Food Ordering Conversion Lift",
    description: "Measured how social-proof badges changed conversion behaviour across 88K+ users over 14 days.",
    stats: [
      "Conversion 20.17% → 20.86%",
      "AOV ₹322 → ₹346",
      "Novelty decay identified",
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDE5OGZmOTQtY2Q4My00MzUxLWFjMDYtZTFjMDAzNTI3ZjI2IiwidCI6IjBiNmM1ZjE0LTFmOGEtNDYxNy04YzI4LTJiZTc5M2FmYzBjMCJ9",
    githubUrl: "https://github.com/krithikavenkatesannn/ab-testing-social-proof-food-delivery",
    caseStudy: {
      sections: [
        {
          label: "Business Context",
          content: "A food delivery platform faced low order conversion due to decision fatigue from too many restaurant and menu choices. The product team introduced social-proof badges (\"Popular\", \"Most Ordered\") and ran a 14-day A/B experiment across 88K+ users.",
        },
        {
          label: "Objective",
          content: "Measure whether social-proof badges could increase order conversion and customer spending without negatively affecting cancellation rates or order quality.",
        },
        {
          label: "Analysis",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Validated balanced traffic allocation between control and treatment groups</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Key metrics evaluated: Conversion Rate, Average Order Value (AOV), Cancellation Rate, Time-to-Order, Menu Exploration</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Compared treatment performance across new vs returning users and daily trends over 14 days</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Built an executive Power BI dashboard to communicate experiment results to stakeholders</span></li>
            </ul>
          ),
        },
        {
          label: "Key Findings",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Conversion rate improved from 20.17% to 20.86% — social-proof badges helped more users complete purchases</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Average order value increased from ₹322 to ₹346 — users spent more when exposed to popularity signals</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Users completed purchases faster, reducing average decision time from 13 to 12 minutes</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Cancellation rates increased slightly but stayed within acceptable levels</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>New users responded more positively than returning users — badges were most effective for first-time buyers</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Treatment group explored more menus while still converting faster, showing improved confidence not rushed decisions</span></li>
            </ul>
          ),
        },
        {
          label: "Business Impact & Recommendation",
          content: (
            <div className="space-y-4">
              <p>The experiment generated an estimated ₹432K incremental revenue in 14 days, with projected monthly impact crossing ₹925K after full rollout. A key insight was novelty decay — the conversion uplift reduced significantly from Week 1 to Week 2, showing badge effectiveness weakened as users became familiar with it.</p>
              <p><strong>Recommendation:</strong> Phased rollout of social-proof badges with continued monitoring of long-term conversion. Test alternative badge variations and prioritise exposure for new users where impact was strongest.</p>
            </div>
          ),
        },
      ]
    }
  },
  {
    id: "subscription-churn",
    image: subsImg,
    tags: ["Excel", "Python", "Power BI"],
    title: "Subscription & Churn Analysis",
    description: "Tracked where retention collapsed and revenue leakage accelerated across 28K subscribers.",
    stats: [
      "Paid subscribers dropped 32%",
      "NRR fell below 100%",
      "M11 retention: 60% → 42%",
    ],
    dashboardUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNjdjNmU1MzItNmVjOS00ZGZjLWE4YWItZmU4ZWM2NjUyZDQyIiwidCI6IjBiNmM1ZjE0LTFmOGEtNDYxNy04YzI4LTJiZTc5M2FmYzBjMCJ9&pageName=7809e07cc0acc66639b8",
    githubUrl: "https://github.com/krithikavenkatesannn/subscription-retention-churn-analysis",
    caseStudy: {
      sections: [
        {
          label: "Problem",
          content: "A subscription streaming platform with 28K+ paid users faced declining retention and slowing revenue growth despite stable ARPU increases. NRR had fallen below 100% and the business needed to understand which segments were driving churn and where lifecycle leakage was happening.",
        },
        {
          label: "Approach",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Analyzed subscription, churn, trial, and migration trends across 2023–2024 user cohorts</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Built cohort retention and survival analysis tracking M1, M6, and M11 lifecycle stages</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Evaluated NRR, MRR, ARPU, LTV, trial-to-paid conversion, and upgrade vs downgrade migration</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Performed plan-level segmentation across Basic, Premium, Duo, Student, and Annual plans</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Built migration matrices to identify revenue leakage from downgrades</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Created an interactive Power BI dashboard covering subscription growth, retention, and churn behaviour</span></li>
            </ul>
          ),
        },
        {
          label: "Key Findings",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Paid subscribers declined from 28K → 19K (-32%), with NRR below 100% — structural contraction, not seasonal</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>ARPU increased from $18 → $21, proving pricing wasn't the issue — retention was</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Revenue lost to churn grew from $212K → $298K (+40%), while new MRR stayed nearly flat</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Trial-to-paid conversion weakened from 7.2% → 6.0%, showing acquisition funnel deterioration</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Early churn improved (26% → 6%), but mid-lifecycle retention collapsed — M11 retention fell from 60% → 42%</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Annual plan had the strongest retention (1.08% churn) but represented only a small share of new acquisitions</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Upgrade rates dropped while downgrade migration increased, revealing weakening expansion revenue</span></li>
            </ul>
          ),
        },
        {
          label: "Recommendations",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Prioritise Annual and Duo plans in acquisition campaigns due to higher LTV and lower churn</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Launch engagement campaigns targeting users between Month 3–6 where retention decline was strongest</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Improve Premium plan differentiation with additional features and win-back campaigns</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Introduce a "Premium Lite" tier to reduce downgrade migration</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Set automated NRR monitoring and cohort retention tracking as core KPIs</span></li>
            </ul>
          ),
        },
      ]
    }
  },
  {
    id: "ecommerce-performance",
    image: ecomImg,
    tags: ["Excel", "SQL", "Power BI"],
    title: "E-commerce Product Performance Analysis",
    description: "Uncovered revenue concentration risk and seasonal slowdown patterns across 108K global orders.",
    stats: [
      "$28M revenue · 108K orders",
      "85% revenue from 3 products",
      "Loyalty: 11% → 55%",
    ],
    dashboardUrl: null,
    githubUrl: "https://github.com/krithikavenkatesannn/E-commerce-Performance-Analysis",
    caseStudy: {
      sections: [
        {
          label: "Problem",
          content: "An electronics e-commerce platform processing 108K+ global orders wanted to understand why revenue growth slowed after the pandemic boom despite stable order volumes. The business needed visibility into customer behaviour shifts, refund risks, loyalty performance, and product concentration risk.",
        },
        {
          label: "Approach",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Analyzed transactional, refund, loyalty, and acquisition channel data from 2019–2022 across global markets</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Evaluated revenue growth trends, AOV, refund rates, loyalty revenue contribution, and channel performance</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Performed year-over-year and seasonal trend analysis to identify demand shifts</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Conducted product-level revenue and refund analysis to identify high-risk, high-value categories</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Compared acquisition channels across Website, Mobile App, Direct, Email, and Affiliate traffic</span></li>
            </ul>
          ),
        },
        {
          label: "Key Findings",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Generated $28M revenue across 108K orders with an average order value of $260</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Revenue peaked during 2020 pandemic demand and declined steadily through 2022 — structural normalization, not temporary</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Three products — Gaming Monitor, AirPods, MacBook Air — contributed 85% of total revenue, creating major SKU concentration risk</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Laptop categories showed disproportionately high refund rates: ThinkPad and MacBook Air exceeded 11% vs ~5% company average</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Loyalty contribution grew significantly from 11% → 55% of total revenue, proving repeat customers became a major growth driver</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Website generated 97% of total revenue; Mobile App contributed only ~3% with significantly lower AOV</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Seasonal demand consistently peaked September–December; February–June was a recurring slowdown</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>2022 refund values dropped to zero — likely missing or incomplete data, not genuine improvement</span></li>
            </ul>
          ),
        },
        {
          label: "Recommendations",
          content: (
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Prioritise inventory and marketing spend around high-performing products during Q4 seasonal peaks</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Reduce refund-related losses in laptop categories through improved product descriptions and post-purchase support</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Expand loyalty incentives and tiered rewards to strengthen repeat purchase behaviour</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Improve Mobile App experience and conversion strategy</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Create promotional campaigns during off-peak months to reduce seasonal revenue slowdown</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span><span>Validate and fix incomplete refund reporting before operational decision-making</span></li>
            </ul>
          ),
        },
        {
          label: "Month Over Month Analysis",
          content: (
            <div>
              <p className="text-[#6B6B6B] text-sm mb-4 leading-[1.7]">Revenue growth peaked in 2020–2021 before declining in 2022 — this chart shows product-level monthly revenue trends across the full four-year window.</p>
              <img
                src={momChartImg}
                alt="Month Over Month Revenue Analysis"
                className="w-full rounded-xl border border-[#F0E8E0] shadow-sm"
              />
            </div>
          ),
        },
      ]
    }
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 22 } },
  };

  return (
    <section id="projects" className="py-14 md:py-20 bg-[#FFF8F0] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <div className="mb-14">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                Things I've{" "}
                <span className="text-gradient-accent">Built</span>
              </h2>
              <div
                className="mt-3 h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F0E8E0] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="h-52 w-full overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-[#6B6B6B] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-[1.1rem] font-serif font-bold text-[#1A1A1A] mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#6B6B6B] font-sans text-sm mb-5 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="space-y-1.5 mb-7">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex gap-2 text-sm text-[#1A1A1A] font-sans">
                        <span className="text-primary font-bold">→</span>
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#F0E8E0]">
                    {project.dashboardUrl && (
                      <a
                        href={project.dashboardUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-bold px-4 py-2.5 rounded-full btn-gradient"
                      >
                        View Dashboard
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full btn-gradient-outline ${!project.dashboardUrl ? 'flex-1' : ''}`}
                    >
                      GitHub
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] md:max-h-[90vh] overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="overflow-y-auto overflow-x-hidden flex-grow custom-scrollbar">
                <div className="h-48 sm:h-56 w-full shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-[#6B6B6B] text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-[#6B6B6B] font-sans text-base leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <hr className="border-[#F0E8E0] mb-8" />
                  
                  <div className="space-y-10">
                    {selectedProject.caseStudy.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 font-sans">
                          {section.label}
                        </h4>
                        <div className="text-[#1A1A1A] font-sans text-sm sm:text-base leading-relaxed">
                          {section.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 border-t border-[#F0E8E0] bg-gray-50/50 flex flex-col sm:flex-row gap-4 shrink-0">
                {selectedProject.dashboardUrl && (
                  <a
                    href={selectedProject.dashboardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-bold px-6 py-3.5 rounded-full btn-gradient shadow-sm"
                  >
                    View Dashboard
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full btn-gradient-outline ${!selectedProject.dashboardUrl ? 'sm:w-auto sm:px-12' : 'flex-1'}`}
                >
                  View on GitHub
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
