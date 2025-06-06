"use client";

import { motion } from "framer-motion";

interface MDivProps {
  children: React.ReactNode;
  customClass: string;
  initial: {
    opacity: number;
    y: number;
  };
  whileInView?: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
  whileHover?: {
    scale: number;
    boxShadow: string;
  };
  animate?: {
    opacity: number;
    y: number;
  };
}

const MDiv = ({
  children,
  customClass,
  initial,
  whileInView,
  transition,
  whileHover,
  animate,
}: MDivProps) => {
  return (
    <div>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        className={customClass}
        whileHover={whileHover}
        animate={animate}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MDiv;
