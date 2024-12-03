"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div
      className="relative  w-10 h-10"
      initial={{ opacity: 0, scale: 0.5, x: "-100%" }} // Start from left
      animate={{
        opacity: 1,
        scale: 1,
        x: 0, // End at the default position
      }}
      transition={{
        duration: 0.5, // Slide duration
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src="/E.png" // Replace with your actual logo image path
          alt="Rotating Logo"
          width={40}
          height={40}
          className="w-full   h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
