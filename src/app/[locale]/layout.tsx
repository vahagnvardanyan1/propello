import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { locales } from "@/i18n/config";

import "../globals.css";

export const metadata: Metadata = {
  title: "Propello - Accelerate Innovation, Automate Success",
  description:
    "We design, develop, and automate digital ecosystems that scale businesses through intelligent technology. Expert web development, mobile backend, UI/UX design, and business automation.",
  keywords: [
    "web development",
    "mobile backend",
    "UI/UX design",
    "business automation",
    "AI integration",
    "software development",
  ],
  authors: [{ name: "Propello" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Propello",
    title: "Propello - Accelerate Innovation, Automate Success",
    description:
      "We design, develop, and automate digital ecosystems that scale businesses through intelligent technology.",
  },
};

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ScrollProgress />
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster
              position="top-center"
              richColors
              toastOptions={{
                style: {
                  minHeight: "48px",
                },
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
