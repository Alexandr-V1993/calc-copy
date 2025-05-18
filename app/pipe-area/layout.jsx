import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор площади трубы - точный расчет поверхности онлайн",
  description:
    "Профессиональный расчет площади внутренней и внешней поверхности трубы. Учет диаметра, толщины стенок и длины. Формулы и примеры для инженеров и строителей.",
  keywords: [
    "калькулятор площади трубы",
    "расчет поверхности трубы",
    "площадь металлической трубы",
    "онлайн калькулятор труб",
    "инженерные расчеты",
    "строительные калькуляторы",
  ],
  alternates: {
    canonical: "/pipe-area",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Калькулятор площади трубы - точный расчет онлайн",
    description:
      "Профессиональный расчет площади поверхности трубы с учетом внутреннего и внешнего диаметра. Формулы и примеры для точных инженерных вычислений.",
    url: "/pipe-area",
    type: "website",
    images: [
      {
        url: "/images/pipe-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади трубы - точный расчет онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади трубы - точный расчет онлайн",
    description:
      "Онлайн инструмент для расчета площади поверхности труб с примерами и формулами.",
    images: ["/images/pipe-area-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор площади трубы",
              url: "https://boxcalculators.ru/pipe-area",
              description:
                "Профессиональный инструмент для расчета площади поверхности труб с учетом внутреннего и внешнего диаметра.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет внешней поверхности",
                "Расчет внутренней поверхности",
                "Учет толщины стенок",
                "Примеры вычислений",
                "Подробные формулы",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/pipe-area-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "128",
              },
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
