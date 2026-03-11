import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");

  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl font-bold tracking-wider mb-4">
              <span className="text-text">imp</span>
              <span className="text-text">neu</span>
              <span className="text-accent">rec</span>
            </div>
            <p className="text-text-muted leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {(["about", "products", "whyUs", "testimonials", "contact"] as const).map(
                (key) => (
                  <li key={key}>
                    <a
                      href={`#${key === "whyUs" ? "why-us" : key}`}
                      className="text-text-muted hover:text-accent transition-colors text-sm"
                    >
                      {nav(key)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-4">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>{contact("address")}</li>
              <li>{contact("phoneNumber")}</li>
              <li>{contact("emailAddress")}</li>
              <li>{contact("cif")}</li>
            </ul>

            {/* Social icons placeholder */}
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="w-10 h-10 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors text-xs font-bold cursor-pointer"
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-text-muted text-sm">
          &copy; {new Date().getFullYear()} ImpNeuRec. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
