"use client";

import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import LinkCTA from "@/components/ui/LinkCTA";
import Section from "@/components/Section";

export const metadata = {
  title:
    "Services | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "Professional services by Sandro Dezerio: backend & full-stack development, API design, architecture consulting, technical mentorship, and custom software solutions for businesses.",
  openGraph: {
    title:
      "Services | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Backend & full-stack development, API design, architecture consulting, and more by Sandro Dezerio.",
    url: "https://sandrodezerio.dev/services",
  },
  twitter: {
    title:
      "Services | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Backend & full-stack development, API design, architecture consulting, and more by Sandro Dezerio.",
  },
};

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <Section>
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
                  } bg-gray-950/50 p-6 rounded-lg shadow-md`}
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
    </Section>
  );
}
