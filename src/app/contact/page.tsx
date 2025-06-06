import type { Metadata } from "next";

import { useTranslations } from "next-intl";

import Section from "@/components/Section";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

//import { FaTwitter } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
  description:
    "Contact Sandro Dezerio for project inquiries, collaborations, or technical consultations. Based in Medellín, Colombia, available for remote and international work.",
  openGraph: {
    title:
      "Contact | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Get in touch with Sandro Dezerio for backend, full-stack, and cloud-native development.",
    url: "https://sandrodezerio.dev/contact",
  },
  twitter: {
    title:
      "Contact | Sandro Dezerio - Backend & Full-Stack Javascript Developer",
    description:
      "Get in touch with Sandro Dezerio for backend, full-stack, and cloud-native development.",
  },
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <Section>
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="max-w-2xl mx-auto rounded-lg  p-2">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-950/50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              {t("form.title")}
            </h2>

            <ContactForm />

            <div className="mt-8 text-center">
              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/sandro-dezerio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {/*t("contactInfo.linkedin")*/}
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/SandroSD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {/*t("contactInfo.github")*/}
                  <FaGithub className="w-6 h-6" />
                </a>
                {/*<a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {t("contactInfo.twitter")}
                  <FaTwitter className="w-6 h-6" />
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
