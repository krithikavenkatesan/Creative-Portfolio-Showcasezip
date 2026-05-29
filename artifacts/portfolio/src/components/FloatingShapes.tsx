import { motion } from "framer-motion";

const spring = (delay = 0, duration = 1.8) => ({
  type: "spring" as const,
  stiffness: 120,
  damping: 8,
  repeat: Infinity,
  repeatType: "mirror" as const,
  delay,
  duration,
});

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* ═══ TOP-LEFT CLUSTER ═══════════════════════════════ */}

      {/* Bouncy filled circle — top left */}
      <motion.div
        animate={{ y: [-12, 12], x: [-6, 6] }}
        transition={spring(0, 2)}
        className="absolute top-[15%] left-[4%] w-7 h-7 rounded-full"
        style={{ background: "linear-gradient(135deg, #E8457A55, #FF6B3555)" }}
      />

      {/* Small outline circle — left mid */}
      <motion.div
        animate={{ y: [10, -14] }}
        transition={spring(0.4, 1.6)}
        className="absolute top-[38%] left-[5%] w-14 h-14 rounded-full"
        style={{ border: "2px solid #E8457A25" }}
      />

      {/* Tiny solid dot */}
      <motion.div
        animate={{ y: [-8, 10], x: [4, -4] }}
        transition={spring(1.2, 1.4)}
        className="absolute top-[60%] left-[7%] w-3 h-3 rounded-full"
        style={{ background: "#FF6B3560" }}
      />

      {/* Large faint circle outline — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] left-[2%] w-44 h-44 rounded-full"
        style={{ border: "1px solid #E8457A15" }}
      />

      {/* ═══ TOP-CENTER CLUSTER ══════════════════════════════ */}

      {/* Dashed spinning ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[6%] left-[46%] rounded-full"
        style={{ width: 80, height: 80, border: "1.5px dashed #E8457A22" }}
      />

      {/* Tilted ribbon */}
      <motion.div
        animate={{ y: [-10, 10], rotate: [10, 22] }}
        transition={spring(0.6, 2)}
        className="absolute top-[12%] left-[38%] w-20 h-3 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A20, #FF6B3520)" }}
      />

      {/* Sparkle star — top center-right */}
      <motion.svg
        animate={{ rotate: [0, 18, -12, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[22%] left-[44%]"
        width="20" height="20" viewBox="0 0 24 24"
      >
        <path d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z" fill="url(#s1)" fillOpacity="0.32"/>
        <defs>
          <linearGradient id="s1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* ═══ LEFT-MID SHAPES ═════════════════════════════════ */}

      {/* Triangle outline — bouncy */}
      <motion.svg
        animate={{ y: [-14, 10], rotate: [-5, 8] }}
        transition={spring(0.3, 2.2)}
        className="absolute top-[28%] left-[16%]"
        width="26" height="24" viewBox="0 0 26 24"
      >
        <polygon points="13,2 25,22 1,22" fill="none" stroke="url(#t1)" strokeWidth="1.8" strokeLinejoin="round" opacity="0.4"/>
        <defs>
          <linearGradient id="t1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Filled small square rotated */}
      <motion.svg
        animate={{ y: [8, -10], rotate: [15, 40] }}
        transition={spring(1.5, 1.8)}
        className="absolute top-[46%] left-[13%]"
        width="16" height="16" viewBox="0 0 16 16"
      >
        <rect x="1" y="1" width="14" height="14" rx="2" fill="url(#sq1)" opacity="0.2"/>
        <defs>
          <linearGradient id="sq1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Outline box — mid left */}
      <motion.svg
        animate={{ y: [-10, 12], rotate: [0, -18] }}
        transition={spring(0.9, 2)}
        className="absolute top-[64%] left-[20%]"
        width="22" height="22" viewBox="0 0 22 22"
      >
        <rect x="1" y="1" width="20" height="20" rx="3" fill="none" stroke="#FF6B35" strokeWidth="1.4" opacity="0.28"/>
      </motion.svg>

      {/* ═══ RIGHT SIDE SHAPES ═══════════════════════════════ */}

      {/* Large outline circle — upper right (behind photo) */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[8%] right-[4%] w-28 h-28 rounded-full"
        style={{ border: "1.5px solid #E8457A18" }}
      />

      {/* Bouncy triangle — right */}
      <motion.svg
        animate={{ y: [10, -12], rotate: [-8, 6] }}
        transition={spring(0.7, 2)}
        className="absolute top-[38%] right-[8%]"
        width="20" height="18" viewBox="0 0 20 18"
      >
        <polygon points="10,1 19,17 1,17" fill="url(#t2)" opacity="0.22"/>
        <defs>
          <linearGradient id="t2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B35"/>
            <stop offset="100%" stopColor="#E8457A"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Sparkle — right mid */}
      <motion.svg
        animate={{ rotate: [0, -20, 10, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[55%] right-[12%]"
        width="18" height="18" viewBox="0 0 24 24"
      >
        <path d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z" fill="url(#s2)" fillOpacity="0.3"/>
        <defs>
          <linearGradient id="s2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B35"/>
            <stop offset="100%" stopColor="#E8457A"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Outline square — right lower */}
      <motion.svg
        animate={{ y: [-8, 10], rotate: [20, 38] }}
        transition={spring(1.1, 1.9)}
        className="absolute bottom-[30%] right-[6%]"
        width="20" height="20" viewBox="0 0 20 20"
      >
        <rect x="1" y="1" width="18" height="18" rx="3" fill="none" stroke="url(#sq2)" strokeWidth="1.5" opacity="0.3"/>
        <defs>
          <linearGradient id="sq2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* ═══ BOTTOM CLUSTER ══════════════════════════════════ */}

      {/* Wavy line — bottom */}
      <motion.svg
        animate={{ x: [0, 8, 0], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[18%] right-[22%]"
        width="70" height="22" viewBox="0 0 70 22"
      >
        <path d="M0 11 Q12 2 24 11 Q36 20 48 11 Q60 2 70 11" stroke="url(#wave)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.38"/>
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Small filled gradient circle — bottom center */}
      <motion.div
        animate={{ y: [-10, 10] }}
        transition={spring(0.8, 2.2)}
        className="absolute bottom-[12%] left-[48%] w-4 h-4 rounded-full"
        style={{ background: "linear-gradient(135deg, #E8457A50, #FF6B3550)" }}
      />

      {/* Medium circle ring — bottom left-center */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[8%] left-[30%] w-32 h-32 rounded-full"
        style={{ border: "1px solid #F9B5AC22" }}
      />

      {/* Tiny bar chart doodle */}
      <motion.svg
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[58%] right-[20%]"
        width="36" height="28" viewBox="0 0 36 28"
      >
        <rect x="0" y="14" width="6" height="14" rx="2" fill="#E8457A" fillOpacity="0.28"/>
        <rect x="10" y="6" width="6" height="22" rx="2" fill="#FF6B35" fillOpacity="0.28"/>
        <rect x="20" y="10" width="6" height="18" rx="2" fill="#E8457A" fillOpacity="0.22"/>
        <rect x="30" y="2" width="6" height="26" rx="2" fill="#FF6B35" fillOpacity="0.22"/>
      </motion.svg>

      {/* Tiny dot cluster — center-left gap */}
      <motion.div
        animate={{ y: [-6, 8] }}
        transition={spring(2, 1.5)}
        className="absolute top-[50%] left-[28%] w-2 h-2 rounded-full"
        style={{ background: "#E8457A55" }}
      />
      <motion.div
        animate={{ y: [6, -8] }}
        transition={spring(2.3, 1.5)}
        className="absolute top-[53%] left-[31%] w-1.5 h-1.5 rounded-full"
        style={{ background: "#FF6B3555" }}
      />

      {/* Pill ribbon — lower left */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-6, 2, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[82%] left-[56%] w-14 h-2.5 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A28, #FF6B3528)" }}
      />

    </div>
  );
}
