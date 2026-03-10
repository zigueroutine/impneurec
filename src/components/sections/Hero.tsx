import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero bg-tread-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <AnimatedSection>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider leading-tight mb-6">
            {t("headline")}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("subheadline")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Button href="#contact">{t("cta")}</Button>
        </AnimatedSection>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
