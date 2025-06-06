import type { Metadata } from "next";

import { useTranslations } from "next-intl";

import Section from "@/components/Section";
import ExperienceTimeLine from "@/components/ExperienceTimeLine";

export const metadata: Metadata = {
  title:
    "Experience | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "Explore Sandro Dezerio's professional experience: impactful roles at Distillery, FPay, SouIIT Solutions, and Union Personal. Proven results in backend, full-stack, and cloud-native development.",
  openGraph: {
    title:
      "Experience | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Detailed work history and achievements in software engineering, cloud architecture, and team leadership.",
    url: "https://sandrodezerio.dev/experience",
  },
  twitter: {
    title:
      "Experience | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Detailed work history and achievements in software engineering, cloud architecture, and team leadership.",
  },
};

export default function ExperiencePage() {
  const t = useTranslations("experience");

  return (
    <Section>
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        <ExperienceTimeLine />
      </div>
    </Section>
  );
}
