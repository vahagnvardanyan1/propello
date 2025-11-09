import type { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
