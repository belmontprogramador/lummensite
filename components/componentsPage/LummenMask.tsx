"use client";
import { motion } from "framer-motion";

export default function LummenMask() {
  return (
    <motion.img
      src="/logo-lummen.png"
      alt="Lummen Mask"
      className="w-52 mx-auto drop-shadow-[0_0_25px_rgba(159,69,255,0.7)]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: [0.95, 1, 0.95],
        filter: [
          "drop-shadow(0 0 10px #9f45ff)",
          "drop-shadow(0 0 20px #ff4fd8)",
          "drop-shadow(0 0 10px #9f45ff)"
        ]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  );
}
