import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* ── CIRCLES ─────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] w-5 h-5 rounded-full"
        style={{ background: "linear-gradient(135deg, #E8457A55, #FF6B3555)" }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[22%] left-[8%] w-10 h-10 rounded-full"
        style={{ border: "1.5px solid #E8457A30" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[10%] left-[32%] w-36 h-36 rounded-full"
        style={{ border: "1px solid #F9B5AC20" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute top-[12%] right-[8%] w-16 h-16 rounded-full"
        style={{ border: "1.5px solid #E8457A20" }}
      />
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[55%] left-[36%] w-3 h-3 rounded-full"
        style={{ background: "#F9B5AC" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-[38%] left-[20%] w-2 h-2 bg-[#1A1A1A]/12 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[40%] right-[5%] w-6 h-6 rounded-full"
        style={{ background: "linear-gradient(135deg, #FF6B3530, #E8457A30)" }}
      />

      {/* ── TRIANGLES (SVG) ─────────────────────── */}
      <motion.svg
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[20%] right-[22%]"
        width="22" height="20" viewBox="0 0 22 20"
      >
        <polygon points="11,2 21,18 1,18" fill="none" stroke="url(#triGrad1)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"/>
        <defs>
          <linearGradient id="triGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[28%] right-[14%]"
        width="16" height="14" viewBox="0 0 16 14"
      >
        <polygon points="8,1 15,13 1,13" fill="url(#triGrad2)" opacity="0.18"/>
        <defs>
          <linearGradient id="triGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ y: [0, -10, 0], rotate: [15, 25, 15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="absolute top-[62%] left-[12%]"
        width="18" height="16" viewBox="0 0 18 16"
      >
        <polygon points="9,1 17,15 1,15" fill="none" stroke="#E8457A" strokeWidth="1.2" opacity="0.28"/>
      </motion.svg>

      {/* ── SQUARES / BOXES ─────────────────────── */}
      <motion.svg
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[68%] left-[10%]"
        width="18" height="18" viewBox="0 0 18 18"
      >
        <rect x="1" y="1" width="16" height="16" rx="2" fill="none" stroke="url(#sqGrad1)" strokeWidth="1.5" opacity="0.3"/>
        <defs>
          <linearGradient id="sqGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ y: [0, 10, 0], rotate: [20, 35, 20] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-[32%] left-[8%]"
        width="14" height="14" viewBox="0 0 14 14"
      >
        <rect x="1" y="1" width="12" height="12" rx="1.5" fill="url(#sqGrad2)" opacity="0.15"/>
        <defs>
          <linearGradient id="sqGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B35"/>
            <stop offset="100%" stopColor="#E8457A"/>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ y: [0, -8, 0], rotate: [-10, 5, -10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[78%] right-[8%]"
        width="20" height="20" viewBox="0 0 20 20"
      >
        <rect x="1" y="1" width="18" height="18" rx="3" fill="none" stroke="#FF6B35" strokeWidth="1.2" opacity="0.22"/>
      </motion.svg>

      {/* ── SPARKLE STARS ───────────────────────── */}
      <motion.svg
        animate={{ rotate: [0, 20, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
        className="absolute top-[28%] right-[12%]"
        width="22" height="22" viewBox="0 0 24 24"
      >
        <path d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z" fill="url(#starGrad1)" fillOpacity="0.28"/>
        <defs>
          <linearGradient id="starGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        animate={{ rotate: [0, -15, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute bottom-[32%] left-[44%]"
        width="14" height="14" viewBox="0 0 24 24"
      >
        <path d="M12 2L13.4 9.6L21 12L13.4 14.4L12 22L10.6 14.4L3 12L10.6 9.6L12 2Z" fill="url(#starGrad2)" fillOpacity="0.3"/>
        <defs>
          <linearGradient id="starGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* ── RIBBONS / PILLS ─────────────────────── */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [12, 20, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[14%] left-[40%] w-16 h-3 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A18, #FF6B3518)" }}
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 10, 0], rotate: [-5, 2, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute top-[48%] left-[55%] w-20 h-2 rounded-full"
        style={{ background: "#F9B5AC45" }}
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [-8, -16, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-[72%] left-[28%] w-12 h-2.5 rounded-full"
        style={{ background: "linear-gradient(90deg, #E8457A20, #FF6B3520)" }}
      />

      {/* ── DOODLE: tiny bar chart ───────────────── */}
      <motion.svg
        animate={{ y: [0, -8, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[10%]"
        width="36" height="28" viewBox="0 0 36 28"
      >
        <rect x="0" y="14" width="6" height="14" rx="2" fill="#E8457A" fillOpacity="0.25"/>
        <rect x="10" y="6" width="6" height="22" rx="2" fill="#FF6B35" fillOpacity="0.25"/>
        <rect x="20" y="10" width="6" height="18" rx="2" fill="#E8457A" fillOpacity="0.2"/>
        <rect x="30" y="2" width="6" height="26" rx="2" fill="#FF6B35" fillOpacity="0.2"/>
      </motion.svg>

      {/* ── DOODLE: wavy line ───────────────────── */}
      <motion.svg
        animate={{ x: [0, 6, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[15%] right-[20%]"
        width="60" height="20" viewBox="0 0 60 20"
      >
        <path d="M0 10 Q10 2 20 10 Q30 18 40 10 Q50 2 60 10" stroke="url(#wavyGrad)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35"/>
        <defs>
          <linearGradient id="wavyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8457A"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* ── DASHED SPINNING RING ────────────────── */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[7%] left-[52%] rounded-full"
        style={{ width: 72, height: 72, border: "1px dashed #E8457A20" }}
      />

    </div>
  );
}
