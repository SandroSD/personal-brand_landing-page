// app/components/ui/Navbar.tsx
"use client";

import { useState, useEffect, useTransition } from "react";
//import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("navbar");
  //const { pathname } = useRouter();

  const [isPending, startTransition] = useTransition();
  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "es" : "en";
    setLocale(newLocale);
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Links to Sections */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600"
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600"
          >
            {t("services")}
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600"
          >
            {t("portfolio")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 dark:text-gray-50 hover:text-blue-600"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Language and Theme Toggles */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {t("toggleLanguage")}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
