"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceTimeLine = () => {
  const t = useTranslations("experience");

  const [isHovered, setIsHovered] = useState(false);
  const [experienceHovered, setExperienceHovered] = useState<number | null>(
    null,
  );

  return (
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
          const Logo = (
            <Image
              src={experience.logo}
              alt={experience.company}
              loader={({ src }) => src}
              unoptimized
              width={50}
              height={50}
              className={`rounded-full transition-transform duration-300 ${
                isHovered && experienceHovered === index
                  ? "scale-110 rotate-6"
                  : "scale-100"
              }`}
              onMouseEnter={() => {
                setExperienceHovered(index);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setExperienceHovered(null);
                setIsHovered(false);
              }}
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
                transform:
                  isHovered && experienceHovered === index
                    ? "scale(1.2)"
                    : "scale(1)",
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
              /*iconOnClick={() => {
                    console.log("object");
                  }}*/
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
  );
};

export default ExperienceTimeLine;
