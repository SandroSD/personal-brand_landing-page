"use client";

import type { Metadata } from "next";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Skills from "@/components/Skills";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "Learn more about Sandro Dezerio: a results-driven Backend Engineer with 5+ years of experience in cloud-native solutions, technical mentorship, and delivering robust software for global teams.",
  openGraph: {
    title: "About | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Discover Sandro Dezerio's journey, technical skills, and professional philosophy.",
    url: "https://sandrodezerio.dev/about",
  },
  twitter: {
    title: "About | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Discover Sandro Dezerio's journey, technical skills, and professional philosophy.",
  },
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <Section>
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 text-center max-w-8xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {t("description.p1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            {t("description.p2")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-12"
          >
            {t("description.p3")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mb-12"
          >
            {t("description.p4")}
          </motion.p>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6 text-center">
          {t("skillsTitle")}
        </h2>
        <Skills skills={t.raw("skills")} />
      </div>
    </Section>
  );
}
