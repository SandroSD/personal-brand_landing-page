"use client";

import type { Metadata } from "next";

import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title:
    "Portfolio | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "A showcase of Sandro Dezerio's projects: scalable APIs, cloud-native platforms, and robust web applications built with Node.js, NestJS, React, and AWS.",
  openGraph: {
    title:
      "Portfolio | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Explore selected projects and technical solutions delivered by Sandro Dezerio.",
    url: "https://sandrodezerio.dev/portfolio",
  },
  twitter: {
    title:
      "Portfolio | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Explore selected projects and technical solutions delivered by Sandro Dezerio.",
  },
};

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <Section>
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Coming Soon Message */}
        <div className="bg-sky-400 text-white px-8 py-4 rounded-full text-2xl font-bold">
          {t("comingSoon")}
        </div>
      </div>
    </Section>
  );
}
