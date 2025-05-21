import { Locale, defaultLocale } from "@/i18n/config";

const STORAGE_KEY = "NEXT_LOCALE";

// Get the user's locale from localStorage or browser settings
export function getUserLocale(): Locale {
  if (typeof window !== "undefined") {
    return (
      (localStorage.getItem(STORAGE_KEY) as Locale) ||
      (navigator.language as Locale) ||
      defaultLocale
    );
  }
  return defaultLocale;
}

// Set the user's locale in localStorage
export function setUserLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}
