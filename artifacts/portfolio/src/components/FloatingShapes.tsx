import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Small accent dot */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] w-4 h-4 rounded-full"
        style={{ background: "linear-gradient(135deg, #E8457A55, #FF6B3555)" }}
      />

      {/* Thin large circle outline */}
      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[22%] left-[26%] w-24 h-24 border border-[#E8457A]/12 rounded-full"
      />

      {/* Tiny gradient dot */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[55%] left-[36%] w-2.5 h-2.5 rounded-full"
        style={{ background: "#F9B5AC" }}
      />

      {/* Tilted thin rectangle — ribbon-like */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [12, 20, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[14%] left-[40%] w-16 h-3 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A18, #FF6B3518)" }}
      />

      {/* Thin short ribbon horizontal */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [-8, -16, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-[72%] left-[28%] w-12 h-2.5 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A20, #FF6B3520)" }}
      />

      {/* Tiny ribbon diagonal */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [30, 45, 30] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-[45%] left-[18%] w-10 h-2 bg-[#1A1A1A]/8 rounded-full"
      />

      {/* Medium circle outline */}
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[22%] left-[8%] w-12 h-12 rounded-full"
        style={{ border: "1px solid #E8457A25" }}
      />

      {/* Very small dot near bottom */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-[38%] left-[20%] w-2 h-2 bg-[#1A1A1A]/12 rounded-full"
      />

      {/* Dashed spinning circle top center */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[7%] left-[52%] rounded-full"
        style={{ width: 72, height: 72, border: "1px dashed #E8457A18" }}
      />

      {/* Large light circle bottom center */}
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[8%] left-[32%] w-40 h-40 border border-[#F9B5AC]/15 rounded-full"
      />

      {/* Ribbon — thin long horizontal near top-right */}
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 10, 0], rotate: [-5, 2, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute top-[32%] left-[55%] w-20 h-2 rounded-full"
        style={{ background: "#F9B5AC45" }}
      />

      {/* Small accent square rotated */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[68%] left-[10%] w-5 h-5 rounded-sm"
        style={{ border: "1px solid #E8457A25" }}
      />

      {/* Sparkle star — top right area */}
      <motion.svg
        animate={{ rotate: [0, 20, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
        className="absolute top-[28%] right-[12%]"
        width="24" height="24" viewBox="0 0 24 24" fill="none"
      >
        <path
          d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z"
          fill="url(#starGrad)"
          fillOpacity="0.25"
        />
        <defs>
          <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Small sparkle — lower left */}
      <motion.svg
        animate={{ rotate: [0, -15, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute bottom-[32%] left-[44%]"
        width="16" height="16" viewBox="0 0 24 24" fill="none"
      >
        <path
          d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z"
          fill="url(#starGrad2)"
          fillOpacity="0.3"
        />
        <defs>
          <linearGradient id="starGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Tiny bar chart doodle — data nerd easter egg */}
      <motion.svg
        animate={{ y: [0, -8, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[10%]"
        width="36" height="28" viewBox="0 0 36 28" fill="none"
      >
        <rect x="0" y="14" width="6" height="14" rx="2" fill="#E8457A" fillOpacity="0.25"/>
        <rect x="10" y="6" width="6" height="22" rx="2" fill="#FF6B35" fillOpacity="0.25"/>
        <rect x="20" y="10" width="6" height="18" rx="2" fill="#E8457A" fillOpacity="0.2"/>
        <rect x="30" y="2" width="6" height="26" rx="2" fill="#FF6B35" fillOpacity="0.2"/>
      </motion.svg>

      {/* Wavy line doodle — bottom right */}
      <motion.svg
        animate={{ x: [0, 6, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[15%] right-[18%]"
        width="60" height="20" viewBox="0 0 60 20" fill="none"
      >
        <path
          d="M0 10 Q10 2 20 10 Q30 18 40 10 Q50 2 60 10"
          stroke="url(#wavyGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="wavyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Gradient pill doodle near hero text area */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-6, 0, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[80%] left-[56%] w-14 h-3 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A22, #FF6B3522)" }}
      />

    </div>
  );
}
