"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import me from "../../public/me.png";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-50 to-white dark:from-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Photo with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-sky-400 dark:border-blue-800 shadow-lg"
        >
          <Image
            src={me}
            alt="Sandro Dezerio"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold text-gray-800 dark:text-gray-50 mb-8"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/about"
            className="inline-block bg-sky-400 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
          >
            {t("cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
