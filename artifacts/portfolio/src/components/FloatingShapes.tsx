import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[10%] w-16 h-16 border-2 border-muted/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[60%] left-[45%] w-4 h-4 bg-primary/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, -15, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[15%] w-12 h-12 border-2 border-muted/20 rounded-md"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[30%] right-[10%] w-24 h-24 border border-muted/10 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[30%] right-[15%] w-6 h-6 bg-primary/10 rounded-full"
      />
    </div>
  );
}
