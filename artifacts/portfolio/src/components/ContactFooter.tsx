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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const socialLinks = [
    { href: "https://github.com/krithikavenkatesannn", icon: <SiGithub className="w-7 h-7" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/krithika-venkatesann/", icon: <FaLinkedinIn className="w-7 h-7" />, label: "LinkedIn" },
    { href: "https://medium.com/@krithikavenkatesannn", icon: <SiMedium className="w-7 h-7" />, label: "Medium" },
    { href: "mailto:krithikaa.venkatesan@gmail.com", icon: <Mail className="w-7 h-7" />, label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-[#1A1A1A] py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="mb-6">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#FFF8F0]">
              Let's{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #E8457A, #FF6B35)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Connect
              </span>
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded-full mx-auto"
              style={{ background: "linear-gradient(90deg, #E8457A, #FF6B35)" }}
            />
          </motion.div>

          <motion.p variants={item} className="text-xl text-[#FFF8F0]/70 mb-12 font-medium leading-[1.7]">
            Open to roles, projects, and good conversations.
          </motion.p>

          <motion.div variants={item} className="flex justify-center items-center gap-6 md:gap-8 mb-20">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center text-[#FFF8F0] hover:scale-110 transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #E8457A, #FF6B35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,248,240,0.1)";
                }}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={item} className="border-t border-[#FFF8F0]/10 pt-8">
            <p className="text-[#FFF8F0]/50 text-sm font-medium">
              © 2026 Krithika Venkatesan
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
