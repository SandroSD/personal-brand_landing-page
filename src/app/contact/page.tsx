"use client";

import { useTranslations } from "next-intl";
//import { useState } from "react";
//import { motion } from "framer-motion";
import Section from "@/components/Section";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";
import { validateAndSendEmail } from "@/utils/sendMail";
//import { FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const t = useTranslations("contact");

  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    message: "",
  });

  const submitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setIsLoading(true);

    const response = await validateAndSendEmail(formRef.current);

    setFormStatus(response);

    setTimeout(() => {
      setFormStatus({ success: false, message: "" });
      setIsLoading(false);
    }, 1500);
  };

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
            <form ref={formRef} onSubmit={submitForm} className="space-y-4">
              <div>
                <label
                  htmlFor="fullname"
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                >
                  {t("form.field_fullname")}
                </label>
                <input
                  type="text"
                  name="fullname"
                  required
                  minLength={3}
                  maxLength={50}
                  autoComplete="fullname"
                  placeholder="Please write your full name..."
                  //className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  className="block w-full rounded-md border-2 text-base p-3 font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                >
                  {t("form.field_email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  minLength={3}
                  maxLength={50}
                  autoComplete="email"
                  placeholder="Please write your email..."
                  //className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  className="block w-full rounded-md border-2 text-base p-3 font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                >
                  {t("form.field_subject")}
                </label>
                <select
                  name="subject"
                  required
                  //className="w-full pl-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pr-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
                  className="block w-full rounded-md border-2 text-base p-3 font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  {["Project Inquiry", "Collaboration", "General Question"].map(
                    (option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  htmlFor="message"
                >
                  {t("form.field_message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell me about your project or question…"
                  //className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  className="block w-full rounded-md border-2 text-base p-3 font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>
              {formStatus.message && (
                <div className="col-span-full">
                  {formStatus.success ? (
                    <p className="text-sm/6 font-semibold text-green-500">
                      {formStatus.message}
                    </p>
                  ) : (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {formStatus.message}
                    </p>
                  )}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold transition"
              >
                {isLoading ? "Sending..." : "Send Message"}{" "}
                <span aria-hidden>🚀</span>
              </button>
              <p className="text-xs text-gray-400 mt-2">
                Your information is safe with me. I will never share your
                details.
              </p>
            </form>

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
