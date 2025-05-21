// app/components/Contact.tsx
"use client";

import { useTranslations } from "next-intl";
//import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");
  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });*/

  /*const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };*/

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    console.log("Form Data:", formData);
    alert("Message sent successfully!"); // Placeholder for actual submission logic
  };*/

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-50 to-white dark:from-gray-800 dark:to-gray-900 py-32"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="max-w-2xl mx-auto rounded-lg  p-2">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              {t("form.title")}
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullname"
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                >
                  {t("form.field_fullname")}
                </label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
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
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
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
                  className="w-full pl-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pr-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
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
                  placeholder="Tell me about your project or question…"
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>
              <div>
                <label
                  className="block font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  htmlFor="contact-method"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="contact-method"
                  className="w-full pl-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pr-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
                >
                  {["Email", "Phone", "WhatsApp"].map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold transition"
              >
                Send Message <span aria-hidden>🚀</span>
              </button>
              <p className="text-xs text-gray-400 mt-2">
                Your information is safe with me. I will never share your
                details.
              </p>
            </form>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {t("contactInfo.socialMedia")}
              </h3>
              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {t("contactInfo.linkedin")}
                </a>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {t("contactInfo.github")}
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-sky-400 transition duration-300"
                >
                  {t("contactInfo.twitter")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
