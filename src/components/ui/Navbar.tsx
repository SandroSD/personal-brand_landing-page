"use client";

import { useState /*, useEffect*/, useTransition } from "react";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

export default function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  //const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState("en");

  /*useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);*/

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "es" : "en";
    console.log({ newLocale });
    setLocale(newLocale);
    startTransition(() => {
      setUserLocale(newLocale);
    });
    console.log(isPending);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-950/50 shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Links to Sections */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/about") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/services") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("services")}
          </Link>
          {/*<Link
            href="/portfolio"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/portfolio") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("portfolio")}
          </Link>*/}
          <Link
            href="/experience"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/experience") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("experience")}
          </Link>
          <Link
            href="/contact"
            className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300 ${
              isActive("/contact") ? "text-blue-500 font-bold" : ""
            }`}
          >
            {t("contact")}
          </Link>
        </div>

        {/* Language and Theme Toggles */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-2 font-bold rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {t("toggleLanguage")}
          </button>
          {/*<button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>*/}
        </div>
      </div>
    </nav>
  );
}
