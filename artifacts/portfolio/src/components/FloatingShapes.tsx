import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Small accent dot */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] w-4 h-4 bg-primary/35 rounded-full"
      />

      {/* Thin large circle outline */}
      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[22%] left-[26%] w-24 h-24 border border-[#1A1A1A]/8 rounded-full"
      />

      {/* Tiny pink dot */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[55%] left-[36%] w-2.5 h-2.5 bg-[#F9B5AC]/80 rounded-full"
      />

      {/* Tilted thin rectangle — ribbon-like */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [12, 20, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[14%] left-[40%] w-16 h-3 bg-primary/10 rounded-full"
      />

      {/* Thin short ribbon horizontal */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [-8, -16, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-[72%] left-[28%] w-12 h-2.5 bg-[#E8231A]/12 rounded-full"
      />

      {/* Tiny ribbon diagonal */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [30, 45, 30] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-[45%] left-[18%] w-10 h-2 bg-[#1A1A1A]/8 rounded-full"
      />

      {/* Medium circle outline, bottom left */}
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[22%] left-[8%] w-12 h-12 border border-primary/15 rounded-full"
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
        className="absolute top-[7%] left-[52%] w-18 h-18 border border-dashed border-primary/10 rounded-full"
        style={{ width: 72, height: 72 }}
      />

      {/* Large light pink circle bottom center */}
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[8%] left-[32%] w-40 h-40 border border-[#F9B5AC]/20 rounded-full"
      />

      {/* Ribbon — thin long horizontal near top-right */}
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 10, 0], rotate: [-5, 2, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute top-[32%] left-[55%] w-20 h-2 bg-[#F9B5AC]/40 rounded-full"
      />

      {/* Small accent square rotated */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[68%] left-[10%] w-5 h-5 border border-primary/20 rounded-sm"
      />
    </div>
  );
}
