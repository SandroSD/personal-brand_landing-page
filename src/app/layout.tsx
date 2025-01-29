import "./globals.css";

import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandro Dezerio | Software Developer",
  description: "Helping businesses digitalize daily tasks.",
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
