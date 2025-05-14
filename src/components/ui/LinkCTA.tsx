import { useTranslations } from "next-intl";
import Link from "next/link";

const LinkCTA = () => {
  const t = useTranslations("hero");

  return (
    <Link
      href="/contact"
      className="inline-block bg-sky-400 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
    >
      {t("cta")}
    </Link>
  );
};

export default LinkCTA;
