import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const testimonials = ["t1", "t2", "t3"] as const;

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-16 md:py-32 gradient-section clip-diagonal-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((key, i) => (
            <TestimonialCard
              key={key}
              text={t(`${key}.text`)}
              author={t(`${key}.author`)}
              role={t(`${key}.role`)}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
