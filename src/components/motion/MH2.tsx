"use client";

import { motion } from "framer-motion";

interface MH2Props {
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

const MH2 = ({
  children,
  customClass,
  initial,
  whileInView,
  transition,
}: MH2Props) => {
  return (
    <motion.h2
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className={customClass}
    >
      {children}
    </motion.h2>
  );
};

export default MH2;
