// app/components/About.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Skills from "./Skills";

export default function About() {
  const t = useTranslations("about");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-auto flex flex-col justify-center items-center bg-white dark:bg-gray-900 pt-32"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <div className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-8xl mx-auto">
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

        {/*<div className="flex flex-wrap justify-center gap-4 mb-12">
          {t
            .raw("skills")
            .map((skill: Record<string, string[]>, index: number) => (
              <div
                key={index}
                className="bg-sky-400 text-white px-6 py-3 rounded-full text-lg font-semibold"
              >
                {Object.entries(skill).map(([key, value]) => (
                  <div key={key} className="mb-2">
                    {key}: {value.join(", ")}
                  </div>
                ))}
              </div>
            ))}
        </div>*/}
        {/*<Image
          src="/icons/firebase.svg"
          alt="Sandro Dezerio"
          width={480}
          height={480}
        />*/}
        {/* Skills */}
        {/* <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6 text-center">
            {t("skillsTitle")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.raw("skills").map((skill: string, index: number) => (
              <div
                key={index}
                className="bg-sky-400 text-white px-6 py-3 rounded-full text-lg font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div> */}

        {/* Experience */}
        {/*<div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6 text-center">
            {t("experienceTitle")}
          </h2>
          <div className="space-y-6">
            {t.raw("experience").map(
              (
                exp: {
                  title: string;
                  company: string;
                  duration: string;
                  description: string;
                },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {exp.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>*/}
      </div>
    </motion.section>
  );
}
