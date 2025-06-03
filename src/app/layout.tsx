import "./globals.css";

import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Sandro Dezerio | Backend & Full-Stack Javascript Developer in Medellín",
    template: "%s | Sandro Dezerio",
  },
  description:
    "Sandro Dezerio - Backend and Full-Stack Javascript Developer based in Medellín, Colombia. Specialized in scalable, high-performance cloud-native solutions using Node.js, NestJS, AWS, and modern JavaScript/TypeScript frameworks.",
  keywords: [
    "Backend Developer",
    "Full-Stack Developer",
    "Node.js",
    "NestJS",
    "AWS",
    "JavaScript",
    "TypeScript",
    "React",
    "Medellín",
    "Cloud-native",
    "APIs",
    "Mentorship",
    "Technical Leadership",
    "CI/CD",
    "SQL",
    "NoSQL",
    "Software Engineer",
    "Remote",
    "Bilingual",
    "English",
    "Spanish",
  ],
  applicationName: "Sandro Dezerio Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Sandro Dezerio", url: "mailto:sdezerio@gmail.com" }],
  creator: "Sandro Dezerio",
  publisher: "Sandro Dezerio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sandrodezerio.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-CO": "/",
    },
  },
  openGraph: {
    title: "Sandro Dezerio | Backend & Full-Stack Javascript Developer",
    description:
      "Building scalable, high-performance cloud-native solutions with Node.js, NestJS, AWS, and modern JavaScript frameworks.",
    url: "https://sandrodezerio.dev/",
    siteName: "Sandro Dezerio Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Que imagen debo poner aquí?
        width: 1200,
        height: 630,
        alt: "Sandro Dezerio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandro Dezerio | Backend & Full-Stack Javascript Developer",
    description:
      "Building scalable, high-performance cloud-native solutions with Node.js, NestJS, AWS, and modern JavaScript frameworks.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Que icon debo poner aquí?
    shortcut: "/favicon.ico", // Que icon debo poner aquí?
    apple: "/apple-touch-icon.png", // Que icon debo poner aquí?
  },
  category: "technology",
  // Optionally add themeColor, colorScheme, etc.
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
