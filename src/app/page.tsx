"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import LinkCTA from "@/components/ui/LinkCTA";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Home | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "Welcome to the portfolio of Sandro Dezerio, an experienced Backend and Full-Stack Developer in Medellín, Colombia. Specializing in scalable, high-performance cloud-native solutions with Node.js, NestJS, AWS, and modern JavaScript frameworks.",
  openGraph: {
    title: "Home | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Explore the work and expertise of Sandro Dezerio: scalable backend systems, cloud-native architecture, and technical leadership.",
    url: "https://sandrodezerio.dev/",
  },
  twitter: {
    title: "Home | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Portfolio of Sandro Dezerio: scalable backend systems, cloud-native architecture, and technical leadership.",
  },
};

export default function Home() {
  const t = useTranslations("hero");

  return (
    <Section>
      <div className="container mx-auto px-6 text-center">
        {/* Profile Photo with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64 mx-auto mb-16 overflow-hidden rounded-full border-4 border-sky-400 dark:border-blue-800 shadow-lg"
        >
          <Image
            src="/me.png"
            alt="Sandro Dezerio"
            loader={({ src }) => src}
            unoptimized
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold text-gray-800 dark:text-gray-50"
        >
          {t("title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl text-gray-600 dark:text-gray-300 my-8"
        >
          {t("subtitle")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          {t("description")}
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <LinkCTA />
        </motion.div>
      </div>
    </Section>
  );
}
