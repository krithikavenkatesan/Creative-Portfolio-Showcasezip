import { motion } from "framer-motion";

const PINK   = "#E8457A";
const ORANGE = "#FF6B35";

/*
  10 shapes placed ONLY along the outer frame — corners, top edge, bottom edge.
  Content zones are kept clear:
    Text block  ~ left 8–52%,  top 35–78%
    Photo blob  ~ left 58–93%, top 18–86%

  Placement grid:
    TOP    row  top  4–13%   — 4 shapes spread across
    BOTTOM row  top 85–94%   — 4 shapes spread across
    GAP    col  left 53–57%  — 2 shapes (between text & photo)
*/

const bob  = (dy: number, delay = 0, dur = 5.5) => ({
  animate:    { y: [0, dy, 0] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const spin = (delay = 0, dur = 20) => ({
  animate:    { rotate: [0, 360] },
  transition: { duration: dur, repeat: Infinity, ease: "linear" as const, delay },
});

const sway = (deg: number, delay = 0, dur = 5) => ({
  animate:    { rotate: [-deg, deg, -deg] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* ── TOP ROW ── */}

      {/* 1 · Dashed circle — top-left corner */}
      <motion.svg {...bob(-10, 0, 5.2)}
        className="absolute top-[5%] left-[3%]"
        width="54" height="54" viewBox="0 0 54 54">
        <circle cx="27" cy="27" r="22" fill="none" stroke={PINK}
          strokeWidth="2" strokeDasharray="6 5" opacity="0.55"/>
      </motion.svg>

      {/* 2 · Star — upper-left center */}
      <motion.svg {...bob(-8, 0.4, 5.8)} {...sway(6, 0.4, 5.8)}
        className="absolute top-[7%] left-[27%]"
        width="38" height="38" viewBox="0 0 50 50">
        <polygon
          points="25,4 30,18 45,18 33,28 37,43 25,34 13,43 17,28 5,18 20,18"
          fill="none" stroke={PINK} strokeWidth="2" strokeLinejoin="round" opacity="0.55"/>
      </motion.svg>

      {/* 3 · Magnifying glass — upper-right center */}
      <motion.svg {...bob(-9, 1.0, 6.1)} {...sway(7, 1.0, 6.1)}
        className="absolute top-[5%] left-[58%]"
        width="40" height="40" viewBox="0 0 42 42">
        <circle cx="17" cy="17" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.52"/>
        <line x1="26" y1="26" x2="39" y2="39" stroke={PINK} strokeWidth="2.5"
          strokeLinecap="round" opacity="0.52"/>
      </motion.svg>

      {/* 4 · Spinning dashed ring — top-right corner */}
      <motion.div {...spin(0, 22)}
        className="absolute top-[4%] right-[4%] rounded-full"
        style={{ width: 58, height: 58, border: `2.5px dashed ${ORANGE}`, opacity: 0.38 }}/>

      {/* ── GAP COLUMN (between text & photo) ── */}

      {/* 5 · Outline circle — upper gap */}
      <motion.svg {...bob(-8, 1.6, 5.4)}
        className="absolute top-[36%] left-[54%]"
        width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15" fill="none" stroke={ORANGE} strokeWidth="2" opacity="0.42"/>
      </motion.svg>

      {/* 6 · Lightning bolt — lower gap */}
      <motion.svg {...bob(-10, 0.3, 4.8)} {...sway(5, 0.3, 4.8)}
        className="absolute top-[60%] left-[54%]"
        width="22" height="36" viewBox="0 0 24 38">
        <path d="M15 2L3 19H12L9 36L23 15H14L15 2Z"
          fill="none" stroke={ORANGE} strokeWidth="2.2"
          strokeLinejoin="round" strokeLinecap="round" opacity="0.50"/>
      </motion.svg>

      {/* ── BOTTOM ROW ── */}

      {/* 7 · Glasses — bottom-left corner */}
      <motion.svg {...bob(-8, 0.9, 5.6)}
        className="absolute top-[87%] left-[3%]"
        width="64" height="30" viewBox="0 0 66 30">
        <circle cx="15" cy="15" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.52"/>
        <circle cx="51" cy="15" r="12" fill="none" stroke={PINK} strokeWidth="2" opacity="0.52"/>
        <line x1="27" y1="15" x2="39" y2="15" stroke={PINK} strokeWidth="2" opacity="0.52"/>
        <line x1="3"  y1="8"  x2="0"  y2="5"  stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.52"/>
        <line x1="63" y1="8"  x2="66" y2="5"  stroke={PINK} strokeWidth="2" strokeLinecap="round" opacity="0.52"/>
      </motion.svg>

      {/* 8 · Wavy gradient line — bottom-left center */}
      <motion.svg
        animate={{ x: [0, 7, 0], opacity: [0.42, 0.60, 0.42] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[90%] left-[25%]"
        width="88" height="26" viewBox="0 0 90 26">
        <path d="M0 18 Q12 4 24 14 Q38 24 52 12 Q66 2 80 13 Q86 16 90 11"
          stroke="url(#waveG)" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
        <defs>
          <linearGradient id="waveG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={PINK}/>
            <stop offset="100%" stopColor={ORANGE}/>
          </linearGradient>
        </defs>
      </motion.svg>

      {/* 9 · Mini bar chart — bottom center */}
      <motion.svg {...bob(-7, 1.3, 4.9)}
        className="absolute top-[87%] left-[48%]"
        width="36" height="30" viewBox="0 0 36 30">
        <rect x="0"  y="16" width="6" height="14" rx="2" fill={PINK}   opacity="0.40"/>
        <rect x="9"  y="8"  width="6" height="22" rx="2" fill={ORANGE} opacity="0.40"/>
        <rect x="18" y="12" width="6" height="18" rx="2" fill={PINK}   opacity="0.36"/>
        <rect x="27" y="4"  width="6" height="26" rx="2" fill={ORANGE} opacity="0.36"/>
      </motion.svg>

      {/* 10 · Trending arrow — bottom-right center */}
      <motion.svg {...bob(-8, 2.1, 5.3)}
        className="absolute top-[88%] left-[68%]"
        width="50" height="32" viewBox="0 0 50 32">
        <polyline points="2,28 14,14 26,20 48,4"
          fill="none" stroke={ORANGE} strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.52"/>
        <polyline points="38,2 48,4 46,13"
          fill="none" stroke={ORANGE} strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.52"/>
      </motion.svg>

    </div>
  );
}
