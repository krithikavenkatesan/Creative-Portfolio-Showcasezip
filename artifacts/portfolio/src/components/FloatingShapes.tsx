import { motion } from "framer-motion";

const float = (y1: number, y2: number, delay = 0, dur = 4) => ({
  animate: { y: [y1, y2, y1] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const sway = (r1: number, r2: number, delay = 0, dur = 5) => ({
  animate: { rotate: [r1, r2, r1] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const PINK = "#E8457A";
const ORANGE = "#FF6B35";

/*
  WHITE-SPACE MAP (1280×800 viewport, text block ~ left:8%–52%, top:38%–74%):
  ┌──────────────────────────────────────────────────────────────────┐
  │  TOP STRIP      top 0–32%        (full width left of photo)      │
  │  GAP STRIP      left 52–62%      (between text and photo)        │
  │  BOTTOM STRIP   top 76–100%      (full width left of photo)      │
  └──────────────────────────────────────────────────────────────────┘
  All shapes placed only within these safe zones.
*/

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* ═══════════════ TOP STRIP ═══════════════ */}

      {/* Dashed circle — top-left corner */}
      <motion.svg {...float(-8, 10, 0, 4.5)}
        className="absolute top-[6%] left-[3%]"
        width="58" height="58" viewBox="0 0 58 58">
        <circle cx="29" cy="29" r="25" fill="none" stroke={PINK}
          strokeWidth="2" strokeDasharray="5 4" opacity="0.68"/>
      </motion.svg>

      {/* Star — upper left, well above text */}
      <motion.svg {...float(-10, 8, 0.5, 5)} {...sway(-7, 7, 0.5, 5)}
        className="absolute top-[14%] left-[18%]"
        width="42" height="42" viewBox="0 0 50 50">
        <polygon points="25,4 30,18 45,18 33,28 37,43 25,34 13,43 17,28 5,18 20,18"
          fill="none" stroke={PINK} strokeWidth="2" strokeLinejoin="round" opacity="0.63"/>
      </motion.svg>

      {/* Tiny dot beside star */}
      <motion.div {...float(-4, 5, 0.9, 3.5)}
        className="absolute top-[21%] left-[28%] w-3 h-3 rounded-full"
        style={{ background: PINK, opacity: 0.58 }}/>

      {/* Magnifying glass — top center */}
      <motion.svg {...float(-8, 9, 1.3, 5.5)} {...sway(-8, 8, 1.3, 5.5)}
        className="absolute top-[5%] left-[37%]"
        width="44" height="44" viewBox="0 0 44 44">
        <circle cx="18" cy="18" r="13" fill="none" stroke={PINK} strokeWidth="2" opacity="0.63"/>
        <line x1="28" y1="28" x2="42" y2="42" stroke={PINK} strokeWidth="2.5"
          strokeLinecap="round" opacity="0.63"/>
      </motion.svg>

      {/* Pencil — upper left, above text block */}
      <motion.svg {...float(-7, 9, 0.2, 4.2)} {...sway(-6, 6, 0.2, 4.2)}
        className="absolute top-[22%] left-[7%]"
        width="26" height="40" viewBox="0 0 26 40">
        <rect x="5" y="2" width="16" height="26" rx="3" fill="none"
          stroke={ORANGE} strokeWidth="2" opacity="0.63"/>
        <polygon points="5,28 21,28 13,37" fill="none"
          stroke={ORANGE} strokeWidth="2" strokeLinejoin="round" opacity="0.63"/>
        <line x1="5" y1="11" x2="21" y2="11" stroke={ORANGE} strokeWidth="1.6" opacity="0.5"/>
      </motion.svg>

      {/* Orange dot — top area */}
      <motion.div {...float(-4, 6, 1.6, 3.2)}
        className="absolute top-[18%] left-[44%] w-2.5 h-2.5 rounded-full"
        style={{ background: ORANGE, opacity: 0.52 }}/>

      {/* Spinning dashed ring — top right of text col */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] left-[50%] rounded-full"
        style={{ width: 68, height: 68, border: `2px dashed ${PINK}`, opacity: 0.3 }}/>

      {/* ═════ GAP STRIP (between text & photo, ~52–62% width) ═════ */}

      {/* Orange outline circle — mid-right of text */}
      <motion.svg {...float(-7, 8, 1.7, 5.0)}
        className="absolute top-[38%] left-[53%]"
        width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="17" fill="none" stroke={ORANGE} strokeWidth="2" opacity="0.5"/>
      </motion.svg>

      {/* Lightning bolt — gap strip, mid */}
      <motion.svg {...float(-9, 7, 0.4, 4.2)} {...sway(-5, 5, 0.4, 4.2)}
        className="absolute top-[55%] left-[54%]"
        width="26" height="40" viewBox="0 0 26 40">
        <path d="M16 2L4 20H13L10 38L24 16H15L16 2Z"
          fill="none" stroke={ORANGE} strokeWidth="2"
          strokeLinejoin="round" strokeLinecap="round" opacity="0.58"/>
      </motion.svg>

      {/* ═══════════════ BOTTOM STRIP ═══════════════ */}

      {/* Glasses — bottom left */}
      <motion.svg {...float(-9, 8, 1, 4.8)}
        className="absolute top-[80%] left-[4%]"
        width="68" height="32" viewBox="0 0 68 32">
        <circle cx="16" cy="16" r="13" fill="none" stroke={PINK} strokeWidth="2" opacity="0.6"/>
        <circle cx="52" cy="16" r="13" fill="none" stroke={PINK} strokeWidth="2" opacity="0.6"/>
        <line x1="29" y1="16" x2="39" y2="16" stroke={PINK} strokeWidth="2" opacity="0.6"/>
        <line x1="3" y1="9" x2="0" y2="5" stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <line x1="65" y1="9" x2="68" y2="5" stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </motion.svg>

      {/* Trending arrow — bottom left */}
      <motion.svg {...float(-7, 8, 1.9, 4.6)}
        className="absolute top-[86%] left-[18%]"
        width="52" height="34" viewBox="0 0 52 34">
        <polyline points="2,30 16,16 28,22 50,4"
          fill="none" stroke={PINK} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.58"/>
        <polyline points="40,2 50,4 48,14"
          fill="none" stroke={PINK} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.58"/>
      </motion.svg>

      {/* Wavy trend line — bottom center */}
      <motion.svg
        animate={{ x: [0, 8, 0], opacity: [0.48, 0.68, 0.48] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[78%] left-[28%]"
        width="95" height="28" viewBox="0 0 95 28">
        <path d="M0 20 Q14 4 28 16 Q42 26 56 13 Q70 2 84 14 Q90 17 95 12"
          stroke="url(#wG)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <defs>
          <linearGradient id="wG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={PINK}/>
            <stop offset="100%" stopColor={ORANGE}/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Mini bar chart — bottom center-right */}
      <motion.svg {...float(-8, 7, 1.1, 4.4)}
        className="absolute top-[82%] left-[42%]"
        width="38" height="32" viewBox="0 0 38 32">
        <rect x="0"  y="18" width="7" height="14" rx="2" fill={PINK} opacity="0.42"/>
        <rect x="10" y="9"  width="7" height="23" rx="2" fill={ORANGE} opacity="0.42"/>
        <rect x="20" y="13" width="7" height="19" rx="2" fill={PINK} opacity="0.38"/>
        <rect x="30" y="4"  width="7" height="28" rx="2" fill={ORANGE} opacity="0.38"/>
      </motion.svg>

      {/* Data point circle — bottom strip */}
      <motion.svg {...float(-6, 7, 0.8, 3.8)}
        className="absolute top-[88%] left-[53%]"
        width="32" height="32" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.6"/>
        <circle cx="16" cy="16" r="3" fill={PINK} opacity="0.5"/>
      </motion.svg>

      {/* Small scattered dots — bottom area */}
      <motion.div {...float(-5, 7, 2.4, 3.2)}
        className="absolute top-[77%] left-[8%] w-3.5 h-3.5 rounded-full"
        style={{ background: ORANGE, opacity: 0.48 }}/>
      <motion.div {...float(5, -5, 2.8, 2.8)}
        className="absolute top-[83%] left-[12%] w-2 h-2 rounded-full"
        style={{ background: PINK, opacity: 0.45 }}/>

      {/* Large faint circle — bottom-left decorative */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-6%] left-[-6%] w-56 h-56 rounded-full"
        style={{ border: `2px solid ${PINK}`, opacity: 0.12 }}/>

    </div>
  );
}
