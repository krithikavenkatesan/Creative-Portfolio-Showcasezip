import { motion } from "framer-motion";

/*
  Floating skill-chip tags — data-analytics themed pill badges
  drifting around the outer frame of the hero.

  Content keep-clear zones:
    Text block  ~ left 8–52%,  top 35–78%
    Photo blob  ~ left 58–93%, top 18–86%
    Buttons     ~ left 8–40%,  top 65–78%
*/

interface Chip {
  text: string;
  top: string;
  left: string;
  delay: number;
  dy: number;
  dur: number;
  size?: "sm" | "md";
}

const chips: Chip[] = [
  /* TOP ROW */
  { text: "SQL",          top: "5%",  left: "3%",  delay: 0,   dy: -9,  dur: 5.2 },
  { text: "Python",       top: "8%",  left: "22%", delay: 0.4, dy: -7,  dur: 5.8 },
  { text: "Tableau",      top: "5%",  left: "54%", delay: 0.8, dy: -8,  dur: 4.9 },
  { text: "Power BI",     top: "7%",  left: "78%", delay: 0.2, dy: -10, dur: 6.0 },

  /* GAP COLUMN (between text & photo, left ~54%) */
  { text: "Excel",        top: "38%", left: "54%", delay: 1.2, dy: -8,  dur: 5.5, size: "sm" },
  { text: "Data Viz",     top: "61%", left: "53%", delay: 0.6, dy: -7,  dur: 5.0, size: "sm" },

  /* BOTTOM ROW */
  { text: "Storytelling", top: "88%", left: "2%",  delay: 0.5, dy: -8,  dur: 5.6 },
  { text: "Analysis",     top: "87%", left: "24%", delay: 1.0, dy: -9,  dur: 4.8 },
  { text: "Dashboards",   top: "90%", left: "46%", delay: 0.3, dy: -7,  dur: 5.3 },
  { text: "Insights",     top: "88%", left: "70%", delay: 0.9, dy: -8,  dur: 5.7 },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* Soft gradient orbs — very faint depth in corners */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, #E8457A18 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, #FF6B3514 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Skill chip tags */}
      {chips.map((chip) => (
        <motion.div
          key={chip.text}
          className="absolute"
          style={{ top: chip.top, left: chip.left }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, chip.dy, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: chip.delay },
            y: {
              duration: chip.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay + 0.6,
            },
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: chip.size === "sm" ? "0.68rem" : "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              padding: chip.size === "sm" ? "4px 10px" : "5px 13px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #E8457A0D, #FF6B3510)",
              border: "1.5px solid",
              borderColor: "transparent",
              backgroundClip: "padding-box",
              boxShadow: "0 0 0 1.5px #E8457A30",
              color: "#C93D6A",
              whiteSpace: "nowrap",
              backdropFilter: "blur(4px)",
            }}
          >
            {chip.text}
          </span>
        </motion.div>
      ))}

    </div>
  );
}
