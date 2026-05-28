import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large accent dot top-left area */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] w-5 h-5 bg-primary/40 rounded-full"
      />

      {/* Thin large circle outline, center-left */}
      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[25%] left-[28%] w-28 h-28 border border-[#1A1A1A]/10 rounded-full"
      />

      {/* Small pink dot */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[55%] left-[38%] w-3 h-3 bg-[#F9B5AC]/70 rounded-full"
      />

      {/* Tilted thin rectangle outline */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [12, 22, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[12%] left-[42%] w-14 h-9 border border-[#E8231A]/15 rounded-lg"
      />

      {/* Medium accent circle, bottom left */}
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[22%] left-[8%] w-10 h-10 border-2 border-primary/20 rounded-full"
      />

      {/* Small dark dot */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-[40%] left-[22%] w-2.5 h-2.5 bg-[#1A1A1A]/15 rounded-full"
      />

      {/* Wavy arc shape top center */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] left-[55%] w-20 h-20 border border-dashed border-primary/10 rounded-full"
      />

      {/* Big thin circle bottom center */}
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[10%] left-[35%] w-36 h-36 border border-[#F9B5AC]/30 rounded-full"
      />

      {/* Small accent square */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[70%] left-[12%] w-6 h-6 border border-primary/25 rounded-sm"
      />
    </div>
  );
}
