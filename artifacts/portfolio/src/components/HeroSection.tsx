import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import resumeUrl from "@assets/Krithika_Resume__._1781085563115.pdf";
import photoUrl from "@assets/WhatsApp_Image_2026-05-27_at_20.38.22_1779947524537.jpeg";

const TYPED_TEXT = "drive measurable impact.";

function TypingGradient() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(TYPED_TEXT.slice(0, i));
        if (i >= TYPED_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 55);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(delay);
  }, []);

  return (
    <span
      style={{
        background: "linear-gradient(90deg, #E8457A, #FF6B35)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: 800,
      }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "linear-gradient(180deg,#E8457A,#FF6B35)",
          marginLeft: "2px",
          verticalAlign: "middle",
          borderRadius: "1px",
          animation: done ? "blink 1s step-end infinite" : "none",
          opacity: done ? 1 : 1,
        }}
      />
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMouse(null);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } },
  };

  return (
    <>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
      <section
        id="home"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,69,122,0.13) 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      >
        {/* Cursor spotlight — reveals grid with a warm glow */}
        {mouse && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px,
                rgba(255,107,53,0.13) 0%,
                rgba(232,69,122,0.07) 40%,
                transparent 70%)`,
              zIndex: 1,
              transition: "background 0.05s",
            }}
          />
        )}

        {/* Fade right so grid clears the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent 38%, #FFF8F0 68%)",
            zIndex: 2,
          }}
        />

        {/* Gap grid — line grid visible in the space between text and photo */}
        <div
          className="absolute pointer-events-none hidden md:block"
          style={{
            left: "46%",
            right: "28%",
            top: "18%",
            bottom: "18%",
            backgroundImage: `
              linear-gradient(rgba(232,69,122,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,69,122,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
            zIndex: 3,
          }}
        />

        <div className="max-w-6xl mx-auto w-full px-6 md:px-10 relative" style={{ zIndex: 3 }}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">

            {/* LEFT — text */}
            <motion.div
              className="flex-1 flex flex-col items-start"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={item}
                className="text-[18px] font-semibold text-[#6B6B6B] mb-3 tracking-wide"
              >
                Hi, I'm Krithika.
              </motion.p>

              <motion.div variants={item} className="mb-7">
                <h1 className="text-6xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight">
                  Data Analyst
                </h1>
                <p className="text-lg md:text-xl font-semibold leading-[1.55] tracking-tight mt-3 text-[#444]">
                  I solve business problems by uncovering opportunities that{" "}
                  <br className="hidden md:block" />
                  <TypingGradient />
                </p>
              </motion.div>

              <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                <a
                  href={resumeUrl}
                  download="KrithikaVenkatesan_Resume.pdf"
                  className="inline-flex items-center justify-center text-sm font-bold h-12 px-7 rounded-full btn-gradient"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center text-sm font-bold h-12 px-7 rounded-full btn-gradient-outline"
                >
                  Say Hi
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — photo */}
            <motion.div
              className="flex-shrink-0 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.25 }}
            >
              <div className="relative w-80 h-96 md:w-[360px] md:h-[430px]">
                <motion.div
                  animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute"
                  style={{
                    inset: "-16px -12px -16px -12px",
                    background: "radial-gradient(ellipse at 55% 50%, #F9C9C7 0%, #F5A9A9 45%, #F0C0C0 100%)",
                    borderRadius: "61% 39% 52% 48% / 44% 55% 45% 56%",
                    zIndex: 0,
                  }}
                />
                <img
                  src={photoUrl}
                  alt="Krithika Venkatesan"
                  className="relative w-full h-full object-cover shadow-xl"
                  style={{
                    borderRadius: "61% 39% 52% 48% / 44% 55% 45% 56%",
                    zIndex: 1,
                    objectPosition: "center top",
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
