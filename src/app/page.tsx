import type { Metadata } from "next";

import { useTranslations } from "next-intl";

import LinkCTA from "@/components/ui/LinkCTA";
import Section from "@/components/Section";
import CustomImage from "../components/CustomImage";
import MDiv from "@/components/motion/MDiv";
import MH1 from "@/components/motion/MH1";
import MH2 from "../components/motion/MH2";
import MP from "@/components/motion/MP";

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

        <MDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          customClass="w-64 h-64 mx-auto mb-16 overflow-hidden rounded-full border-4 border-sky-400 dark:border-blue-800 shadow-lg"
        >
          <CustomImage />
        </MDiv>

        {/* Title */}

        <MH1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          customClass="text-6xl font-bold text-gray-800 dark:text-gray-50"
        >
          {t("title")}
        </MH1>

        <MH2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          customClass="text-2xl text-gray-600 dark:text-gray-300 my-8"
        >
          {t("subtitle")}
        </MH2>

        {/* Subtitle */}
        <MP
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          customClass="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          {t("description")}
        </MP>

        {/* Call-to-Action Button */}
        <MDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          customClass=""
        >
          <LinkCTA />
        </MDiv>
      </div>
    </Section>
  );
}
