"use client";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import me from "../../public/me.png";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Photo */}
        <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-800 shadow-lg">
          <Image
            src={me}
            height={100}
            width={100}
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-4">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {t("subtitle")}
        </p>

        {/* Call-to-Action Button */}
        <Link
          href="/about" // Link to the About page
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
