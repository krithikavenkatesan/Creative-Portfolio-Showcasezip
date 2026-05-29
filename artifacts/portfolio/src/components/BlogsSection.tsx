import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "The Data Cleaning Trick No One Told Me About",
    description:
      "A practical framework for tackling messy datasets — the patterns, traps, and mental models that actually help when real data arrives in pieces.",
    link: "https://medium.com/datadriveninvestor/the-data-cleaning-framework-i-wish-i-knew-when-i-started-d9e6819296d3",
  },
  {
    title: "How do you tell a compelling story with data?",
    description:
      "Numbers don't speak for themselves. Here's how to structure data narratives that actually move people — from insight to decision.",
    link: "https://medium.com/learning-data/how-to-tell-a-compelling-story-with-data-19d2d379ae8a",
  },
  {
    title: "How I Turned Messy Client Notes into a Clear Problem Statement",
    description:
      "A walkthrough of how I went from scattered stakeholder notes to a focused, actionable problem statement ready for analysis.",
    link: "https://medium.com/datadriveninvestor/how-i-turned-messy-client-notes-into-a-clear-problem-statement-6fc87514e6a5",
  },
];

export function BlogsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 22 } },
  };

  return (
    <section id="blogs" className="py-14 md:py-20 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
              Analytics{" "}
              <span className="text-gradient-accent">Playbooks</span>
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
            />
            <p className="text-[#6B6B6B] text-base max-w-xl leading-[1.7] mt-5">
              Writing and thinking out loud on data, products, and everything in between.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogs.map((blog, index) => (
              <motion.a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                variants={cardVariants}
                className="group flex flex-col bg-white rounded-2xl p-7 shadow-sm border border-[#F0E8E0] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="inline-block px-3 py-1 mb-5 text-xs font-bold text-white rounded-full self-start"
                  style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
                >
                  Medium
                </div>
                <h3 className="text-[1.05rem] font-bold text-[#1A1A1A] mb-3 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm mb-6 leading-[1.7] flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-gradient-accent">
                  Read on Medium
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" style={{ color: "#FF6B35" }} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
