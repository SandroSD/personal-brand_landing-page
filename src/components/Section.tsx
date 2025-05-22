import { motion } from "framer-motion";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-50 to-white dark:from-gray-800 dark:to-gray-900 py-32"
    >
      {children}
    </motion.section>
  );
};

export default Section;
