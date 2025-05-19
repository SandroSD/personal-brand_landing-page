"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const t = useTranslations("experience");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 dark:bg-gray-900 py-32"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-50 mb-8 text-center">
          {t("title")}
        </h1>

        <VerticalTimeline>
          {t.raw("jobs").map(
            (
              experience: {
                title: string;
                logo: string;
                company: string;
                location: string;
                from: string;
                to: string;
              },
              index: number,
            ) => {
              const [isHovered, setIsHovered] = useState(false);

              const Logo = (
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={50}
                  height={50}
                  className={`rounded-full transition-transform duration-300 ${
                    isHovered ? "scale-110 rotate-6" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              );
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  date={`${experience.from} - ${experience.to}`}
                  icon={Logo}
                  iconStyle={{
                    background: "rgb(16, 24, 40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    transform: isHovered ? "scale(1.2)" : "scale(1)",
                  }}
                  contentStyle={{
                    background: "rgb(16, 24, 40)",
                    color: "#fff",
                    borderRadius: "0.5em",
                    boxShadow: "0 8px 24px rgb(0,0,0)",
                  }}
                  contentArrowStyle={{
                    borderRight: "1.5em solid rgb(16, 24, 40)",
                  }}
                  iconOnClick={() => {
                    console.log("object");
                  }}
                >
                  <h3 className="vertical-timeline-element-title text-2xl font-bold text-gray-800 dark:text-gray-500">
                    {experience.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-xl font-semibold text-gray-600 dark:text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="vertical-timeline-element-subtitle text-gray-600 dark:text-gray-300">
                    {experience.location}
                  </p>
                </VerticalTimelineElement>
              );
            },
          )}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
