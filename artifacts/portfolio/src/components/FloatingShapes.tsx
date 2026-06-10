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
  LAYOUT (1280×800):
  Text block  ~ left 8–52%,  top 38–74%
  Photo blob  ~ left 60–92%, top 22–84%
  Buttons     ~ left 8–40%,  top 65–74%

  SAFE ZONES used:
  A  Top-left strip    top  4–30%,  left  2–56%
  B  Top-right strip   top  4–20%,  left 62–88%  (above photo)
  C  Gap strip         top 34–70%,  left 53–60%  (between text & photo)
  D  Bottom-left       top 76–95%,  left  2–56%
  E  Bottom-right      top 86–96%,  left 62–82%  (below photo)

  Shapes are distributed across ALL five zones so nothing clusters.
*/

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* ══════════ ZONE A — top-left strip ══════════ */}

      {/* Dashed circle — far-left top */}
      <motion.svg {...float(-8, 10, 0, 4.5)}
        className="absolute top-[6%] left-[2%]"
        width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="22" fill="none" stroke={PINK}
          strokeWidth="2" strokeDasharray="5 4" opacity="0.65"/>
      </motion.svg>

      {/* Pencil — upper left */}
      <motion.svg {...float(-7, 9, 0.2, 4.2)} {...sway(-6, 6, 0.2, 4.2)}
        className="absolute top-[20%] left-[9%]"
        width="24" height="38" viewBox="0 0 24 38">
        <rect x="4" y="2" width="16" height="24" rx="3" fill="none"
          stroke={ORANGE} strokeWidth="2" opacity="0.62"/>
        <polygon points="4,26 20,26 12,35" fill="none"
          stroke={ORANGE} strokeWidth="2" strokeLinejoin="round" opacity="0.62"/>
        <line x1="4" y1="10" x2="20" y2="10" stroke={ORANGE} strokeWidth="1.5" opacity="0.48"/>
      </motion.svg>

      {/* Star — center-left top */}
      <motion.svg {...float(-10, 8, 0.5, 5)} {...sway(-7, 7, 0.5, 5)}
        className="absolute top-[11%] left-[26%]"
        width="40" height="40" viewBox="0 0 50 50">
        <polygon points="25,4 30,18 45,18 33,28 37,43 25,34 13,43 17,28 5,18 20,18"
          fill="none" stroke={PINK} strokeWidth="2" strokeLinejoin="round" opacity="0.62"/>
      </motion.svg>

      {/* Pink dot beside star */}
      <motion.div {...float(-4, 5, 0.9, 3.5)}
        className="absolute top-[19%] left-[35%] w-3 h-3 rounded-full"
        style={{ background: PINK, opacity: 0.55 }}/>

      {/* Magnifying glass — right of center, top */}
      <motion.svg {...float(-8, 9, 1.3, 5.5)} {...sway(-8, 8, 1.3, 5.5)}
        className="absolute top-[5%] left-[45%]"
        width="42" height="42" viewBox="0 0 42 42">
        <circle cx="17" cy="17" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.62"/>
        <line x1="26" y1="26" x2="40" y2="40" stroke={PINK} strokeWidth="2.5"
          strokeLinecap="round" opacity="0.62"/>
      </motion.svg>

      {/* ══════════ ZONE B — top-right (above photo) ══════════ */}

      {/* Spinning dashed ring — top right */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[67%] rounded-full"
        style={{ width: 62, height: 62, border: `2px dashed ${PINK}`, opacity: 0.28 }}/>

      {/* Orange dot — above photo */}
      <motion.div {...float(-4, 6, 1.5, 3.2)}
        className="absolute top-[14%] left-[75%] w-3 h-3 rounded-full"
        style={{ background: ORANGE, opacity: 0.48 }}/>

      {/* Small plain circle — top right */}
      <motion.svg {...float(-6, 7, 0.7, 4.8)}
        className="absolute top-[8%] left-[83%]"
        width="34" height="34" viewBox="0 0 34 34">
        <circle cx="17" cy="17" r="14" fill="none" stroke={ORANGE} strokeWidth="1.8" opacity="0.42"/>
      </motion.svg>

      {/* ══════════ ZONE C — gap strip (between text & photo) ══════════ */}

      {/* Orange outline circle */}
      <motion.svg {...float(-7, 8, 1.7, 5.0)}
        className="absolute top-[36%] left-[54%]"
        width="38" height="38" viewBox="0 0 38 38">
        <circle cx="19" cy="19" r="16" fill="none" stroke={ORANGE} strokeWidth="2" opacity="0.48"/>
      </motion.svg>

      {/* Lightning bolt */}
      <motion.svg {...float(-9, 7, 0.4, 4.2)} {...sway(-5, 5, 0.4, 4.2)}
        className="absolute top-[57%] left-[54%]"
        width="24" height="38" viewBox="0 0 24 38">
        <path d="M15 2L3 19H12L9 36L23 15H14L15 2Z"
          fill="none" stroke={ORANGE} strokeWidth="2"
          strokeLinejoin="round" strokeLinecap="round" opacity="0.55"/>
      </motion.svg>

      {/* ══════════ ZONE D — bottom-left strip ══════════ */}

      {/* Glasses */}
      <motion.svg {...float(-9, 8, 1, 4.8)}
        className="absolute top-[80%] left-[3%]"
        width="66" height="30" viewBox="0 0 66 30">
        <circle cx="15" cy="15" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.58"/>
        <circle cx="51" cy="15" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.58"/>
        <line x1="27" y1="15" x2="39" y2="15" stroke={PINK} strokeWidth="2" opacity="0.58"/>
        <line x1="3" y1="8" x2="0" y2="5" stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.58"/>
        <line x1="63" y1="8" x2="66" y2="5" stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.58"/>
      </motion.svg>

      {/* Orange dot — bottom */}
      <motion.div {...float(-5, 7, 2.2, 3.2)}
        className="absolute top-[77%] left-[18%] w-3.5 h-3.5 rounded-full"
        style={{ background: ORANGE, opacity: 0.46 }}/>

      {/* Trending arrow */}
      <motion.svg {...float(-7, 8, 1.9, 4.6)}
        className="absolute top-[87%] left-[24%]"
        width="50" height="32" viewBox="0 0 50 32">
        <polyline points="2,28 14,14 26,20 48,4"
          fill="none" stroke={PINK} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.56"/>
        <polyline points="38,2 48,4 46,13"
          fill="none" stroke={PINK} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.56"/>
      </motion.svg>

      {/* Wavy gradient line */}
      <motion.svg
        animate={{ x: [0, 8, 0], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[79%] left-[36%]"
        width="90" height="26" viewBox="0 0 90 26">
        <path d="M0 18 Q12 4 24 14 Q38 24 52 12 Q66 2 80 13 Q86 16 90 11"
          stroke="url(#wG)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <defs>
          <linearGradient id="wG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={PINK}/>
            <stop offset="100%" stopColor={ORANGE}/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Mini bar chart */}
      <motion.svg {...float(-8, 7, 1.1, 4.4)}
        className="absolute top-[84%] left-[48%]"
        width="36" height="30" viewBox="0 0 36 30">
        <rect x="0"  y="16" width="6" height="14" rx="2" fill={PINK}   opacity="0.40"/>
        <rect x="9"  y="8"  width="6" height="22" rx="2" fill={ORANGE} opacity="0.40"/>
        <rect x="18" y="12" width="6" height="18" rx="2" fill={PINK}   opacity="0.36"/>
        <rect x="27" y="4"  width="6" height="26" rx="2" fill={ORANGE} opacity="0.36"/>
      </motion.svg>

      {/* Pink dot bottom-center */}
      <motion.div {...float(5, -5, 2.8, 2.8)}
        className="absolute top-[83%] left-[40%] w-2 h-2 rounded-full"
        style={{ background: PINK, opacity: 0.42 }}/>

      {/* ══════════ ZONE E — bottom-right (below photo) ══════════ */}

      {/* Data point circle */}
      <motion.svg {...float(-6, 7, 0.8, 3.8)}
        className="absolute top-[88%] left-[64%]"
        width="30" height="30" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="11" fill="none" stroke={PINK} strokeWidth="2" opacity="0.58"/>
        <circle cx="15" cy="15" r="3" fill={PINK} opacity="0.48"/>
      </motion.svg>

      {/* Small orange dot — bottom right */}
      <motion.div {...float(-4, 5, 1.6, 3)}
        className="absolute top-[82%] left-[74%] w-2.5 h-2.5 rounded-full"
        style={{ background: ORANGE, opacity: 0.44 }}/>

      {/* Large faint circle — bottom-left corner */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-6%] left-[-6%] w-56 h-56 rounded-full"
        style={{ border: `2px solid ${PINK}`, opacity: 0.11 }}/>

    </div>
  );
}
