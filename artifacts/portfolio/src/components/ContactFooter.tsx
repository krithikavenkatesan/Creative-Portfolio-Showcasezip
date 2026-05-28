import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiGithub, SiMedium } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

export function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h2 variants={item} className="text-5xl md:text-7xl font-serif font-bold text-[#FFF8F0] mb-6">
            Let's Connect
          </motion.h2>
          
          <motion.p variants={item} className="text-xl text-[#FFF8F0]/70 mb-12">
            Open to roles, projects, and good conversations.
          </motion.p>
          
          <motion.div variants={item} className="flex justify-center items-center gap-6 md:gap-8 mb-20">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-16 h-16 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center text-[#FFF8F0] hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <SiGithub className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/krithika-venkatesann/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-16 h-16 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center text-[#FFF8F0] hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://medium.com/@krithikavenkatesannn" 
              target="_blank" 
              rel="noreferrer" 
              className="w-16 h-16 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center text-[#FFF8F0] hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <SiMedium className="w-8 h-8" />
              <span className="sr-only">Medium</span>
            </a>
            <a 
              href="mailto:krithikaa.venkatesan@gmail.com" 
              className="w-16 h-16 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center text-[#FFF8F0] hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-8 h-8" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
          
          <motion.div variants={item} className="border-t border-[#FFF8F0]/10 pt-8">
            <p className="text-[#FFF8F0]/50 text-sm">
              © 2026 Krithika Venkatesan
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
