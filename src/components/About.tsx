"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6 text-center">
            {t("skillsTitle")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.raw("skills").map((skill: string, index: number) => (
              <div
                key={index}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
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
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
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
        </div>
      </div>
    </section>
  );
}
