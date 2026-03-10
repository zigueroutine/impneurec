import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const categories = [
  { key: "passenger", icon: "P" },
  { key: "suv", icon: "S" },
  { key: "commercial", icon: "C" },
  { key: "industrial", icon: "I" },
] as const;

export function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="py-24 md:py-32 gradient-section clip-diagonal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ key, icon }, i) => (
            <AnimatedSection
              key={key}
              animation="fadeInUp"
              delay={i * 0.1}
            >
              <div className="bg-bg-card border border-border p-8 group hover:border-secondary transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-secondary/10 text-secondary font-heading font-bold text-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-bg transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
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
