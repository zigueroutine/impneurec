"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection animation="slideInLeft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("name")}
                  required
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("email")}
                  required
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("phone")}
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("message")}
                  required
                  rows={5}
                  className="w-full bg-bg-card border border-border px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button type="submit">{t("send")}</Button>
            </form>
          </AnimatedSection>

          {/* Contact info + map placeholder */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase tracking-wider text-sm mb-1">
                      {t("address")}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold">
                    P
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase tracking-wider text-sm mb-1">
                      {t("phoneNumber")}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold">
                    E
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase tracking-wider text-sm mb-1">
                      {t("emailAddress")}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold">
                    C
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase tracking-wider text-sm mb-1">
                      {t("cif")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-bg-card border border-border h-64 flex items-center justify-center text-text-muted">
                <span className="font-heading uppercase tracking-wider">
                  Map Placeholder
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
