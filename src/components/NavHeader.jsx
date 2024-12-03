"use client";

import { motion } from "framer-motion";

export default function NavItem({ href, children, delay }) {
  return (
    <motion.a
      href={href}
      className=" text-gray-600 w-[250px] hover:text-gray-900 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.48, 0.15, 0.25, 0.96],
      }}
    >
      {children}
    </motion.a>
  );
}
