"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import LinkCTA from "@/components/ui/LinkCTA";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 py-32"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-5 text-center max-w-6xl mx-auto">
          {t("description")}
        </p>

        {/* Services List */}
        <div className="grid grid-cols-2 gap-4">
          {t
            .raw("servicesList")
            .map(
              (
                service: { title: string; description: string },
                index: number,
              ) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${
                    index === 0 && "col-span-1 md:col-span-2 text-center"
                  } bg-slate-800 p-6 rounded-lg shadow-md`}
                  //"
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ),
            )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <LinkCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}
