"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-12 space-y-4">
          {faqKeys.map((key, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <details className="group border border-border rounded-lg bg-bg">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-text font-medium text-lg select-none">
                  {t(`${key}.question`)}
                  <span className="ml-4 shrink-0 text-accent transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-text-muted leading-relaxed">
                  {t(`${key}.answer`)}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
