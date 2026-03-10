import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "5+", key: "years" },
  { value: "50+", key: "brands" },
  { value: "10K+", key: "clients" },
] as const;

const differentiators = [
  { key: "diff1" },
  { key: "diff2" },
  { key: "diff3" },
] as const;

export function WhyChooseUs() {
  const t = useTranslations("whyUs");

  return (
    <section id="why-us" className="py-24 md:py-32 bg-tread-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {stats.map(({ value, key }, i) => (
            <StatCard
              key={key}
              value={value}
              label={t(key)}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map(({ key }, i) => (
            <AnimatedSection
              key={key}
              animation="slideInLeft"
              delay={i * 0.15}
            >
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
