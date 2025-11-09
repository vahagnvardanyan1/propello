import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <ScrollProgress />
          <Navigation />
          <main id="main-content" className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
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
        </div>
      </body>
    </html>
  );
}
