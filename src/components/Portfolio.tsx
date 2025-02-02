"use client";

import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 pt-16">
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
        <div className="bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold">
          {t("comingSoon")}
        </div>
      </div>
    </section>
  );
}
