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
    <section id="blogs" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <div className="mb-14">
            <motion.h2
              variants={cardVariants}
              className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-4"
            >
              Analytics Playbooks
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-[#6B6B6B] text-base font-sans max-w-xl"
            >
              Writing & thinking out loud on data, products, and everything in between.
            </motion.p>
          </div>

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
                {/* Red Medium pill — matches reference */}
                <div className="inline-block px-3 py-1 mb-5 text-xs font-semibold text-white bg-primary rounded-full self-start">
                  Medium
                </div>
                <h3 className="text-[1.05rem] font-serif font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-[#6B6B6B] font-sans text-sm mb-6 leading-relaxed flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  Read on Medium
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
