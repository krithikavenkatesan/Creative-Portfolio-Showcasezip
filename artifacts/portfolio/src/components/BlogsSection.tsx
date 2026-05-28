import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "The Data Cleaning Trick No One Told Me About",
    description: "A practical framework for tackling messy datasets — the patterns, traps, and mental models that actually help when real data arrives in pieces.",
    link: "https://medium.com/datadriveninvestor/the-data-cleaning-framework-i-wish-i-knew-when-i-started-d9e6819296d3"
  },
  {
    title: "How do you tell a compelling story with data?",
    description: "Numbers don't speak for themselves. Here's how to structure data narratives that actually move people — from insight to decision.",
    link: "https://medium.com/learning-data/how-to-tell-a-compelling-story-with-data-19d2d379ae8a"
  },
  {
    title: "How I Turned Messy Client Notes into a Clear Problem Statement",
    description: "A walkthrough of how I went from scattered stakeholder notes to a focused, actionable problem statement ready for analysis.",
    link: "https://medium.com/datadriveninvestor/how-i-turned-messy-client-notes-into-a-clear-problem-statement-6fc87514e6a5"
  }
];

export function BlogsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 22 } }
  };

  return (
    <section id="blogs" className="py-24 md:py-32 bg-[#FFF4E8] sm:bg-[#FFF8F0]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <div className="mb-16 text-center md:text-left">
            <motion.h2 
              variants={cardVariants}
              className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-4"
            >
              Analytics Playbooks
            </motion.h2>
            <motion.p 
              variants={cardVariants}
              className="text-[#6B6B6B] text-lg max-w-2xl font-sans"
            >
              Writing & thinking out loud on data, products, and everything in between.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                variants={cardVariants}
                className="group block bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-[#6B6B6B] bg-[#F5F5F5] rounded-full">
                  Medium
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-[#6B6B6B] font-sans mb-6 line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold mt-auto">
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
