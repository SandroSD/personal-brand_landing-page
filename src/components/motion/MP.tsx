"use client";

import { motion } from "framer-motion";

interface MPProps {
  children: React.ReactNode;
  customClass: string;
  initial: {
    opacity: number;
    y: number;
  };
  whileInView: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
}

const MP = ({
  children,
  customClass,
  initial,
  whileInView,
  transition,
}: MPProps) => {
  return (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className={customClass}
    >
      {children}
    </motion.p>
  );
};

export default MP;
