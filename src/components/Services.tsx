"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

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

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t
            .raw("servicesList")
            .map(
              (
                service: { title: string; description: string },
                index: number,
              ) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ),
            )}
        </div>
      </div>
    </section>
  );
}
