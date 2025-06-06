"use client";

import { motion } from "framer-motion";

interface MH1Props {
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

const MH1 = ({
  children,
  customClass,
  initial,
  whileInView,
  transition,
}: MH1Props) => {
  return (
    <motion.h1
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className={customClass}
    >
      {children}
    </motion.h1>
  );
};

export default MH1;
