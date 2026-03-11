import type { MetadataRoute } from "next";

const BASE_URL = "https://impneurec.com";
const locales = ["es", "en", "pt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: locale === "es" ? BASE_URL : `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "es" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, l === "es" ? BASE_URL : `${BASE_URL}/${l}`])
      ),
    },
  }));
}
