import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { fontClasses } from "@/app/layout";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://impneurec.com/#organization",
  name: "ImpNeuRec",
  url: "https://impneurec.com",
  telephone: "+34672928686",
  email: "info@impneurec.com",
  taxID: "B22468656",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle José Abascal, 44",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "Country",
    name: "Spain",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el pedido mínimo para comprar neumáticos al por mayor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con pedidos mínimos adaptados a cada cliente. Tanto si es un taller independiente como un gran distribuidor, tenemos condiciones flexibles. Contacte con nuestro equipo comercial para recibir una propuesta personalizada según sus necesidades de neumáticos al por mayor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué marcas de neumáticos distribuyen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distribuimos más de 50 marcas de neumáticos, incluyendo marcas premium europeas, marcas de calidad-precio y marcas económicas. Nuestro catálogo abarca neumáticos de turismo, SUV, comerciales e industriales para cubrir todas las necesidades de su negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los plazos de entrega de neumáticos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realizamos entregas en 24-48 horas para pedidos desde nuestro almacén en Madrid a toda la Península Ibérica. Para pedidos de importación directa, los plazos varían entre 2-4 semanas según origen y volumen.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen neumáticos comerciales para flotas de transporte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos especialistas en neumáticos comerciales para flotas. Ofrecemos neumáticos para camiones, furgonetas y vehículos comerciales con precios de mayorista, contratos de suministro a largo plazo y asesoramiento técnico para optimizar el coste por kilómetro de su flota.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo solicitar un presupuesto de neumáticos al por mayor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede solicitar presupuesto a través del formulario de contacto de nuestra web, por email a info@impneurec.com o llamando al +34 672 92 86 86. Indique las medidas, cantidades y tipo de neumático que necesita y recibirá una propuesta en menos de 24 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Distribuyen neumáticos fuera de España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, además de nuestra distribución principal en España, exportamos neumáticos a Portugal, Francia y otros países europeos. Contamos con logística internacional y experiencia en exportación para ofrecer un servicio completo de distribución de neumáticos B2B en toda Europa.",
      },
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={fontClasses}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
