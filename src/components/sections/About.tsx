import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  { key: "quality", icon: "Q" },
  { key: "trust", icon: "T" },
  { key: "service", icon: "S" },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-text-muted text-lg leading-relaxed">
            {t("description")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map(({ key, icon }, i) => (
            <AnimatedSection
              key={key}
              animation="scaleIn"
              delay={i * 0.15}
            >
              <div className="bg-bg-card border border-border p-5 md:p-8 text-center group hover:border-accent transition-colors duration-300">
                <div className="w-16 h-16 bg-accent/10 text-accent font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">
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
