export const locales = ["en", "ru", "hy"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  hy: "Հայերեն",
};

export const defaultLocale: Locale = "en";
