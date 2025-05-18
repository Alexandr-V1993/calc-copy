import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор кирпича | Точный расчет кладки онлайн",
  description:
    "Онлайн-калькулятор расчёта кирпича помогает точно определить необходимое количество кирпичей и сопутствующих материалов для строительства стен. Учитывает тип кирпича, толщину швов, площадь кладки и дополнительные параметры.",
  keywords: [
    "калькулятор кирпича",
    "расчет кирпича",
    "количество кирпича",
    "кладка кирпича",
    "онлайн калькулятор",
    "материалы для кладки",
  ],
  alternates: {
    canonical: "/brickwork-calculator",
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
    title:
      "Калькулятор кирпича онлайн - Точный расчет количества кирпичей для кладки",
    description:
      "Онлайн инструмент для точного расчета количества кирпичей и материалов для кладки. Простой и удобный интерфейс для профессионалов и новичков.",
    url: "/brickwork-calculator",
    type: "website",
    images: [
      {
        url: "/images/brickwork-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор кирпича онлайн - Расчёт кладки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Калькулятор кирпича онлайн - Точный расчет количества кирпичей для кладки",
    description:
      "Онлайн инструмент для точного расчета количества кирпичей и материалов для кладки. Простой и удобный интерфейс для профессионалов и новичков.",
    images: ["/images/brickwork-calculator-twitter.jpg"],
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
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор кирпича",
              url: "https://boxcalculators.ru/brickwork-calculator ",
              description:
                "Онлайн инструмент для точного расчета количества кирпичей и материалов для кладки. Простой и удобный интерфейс для профессионалов и новичков.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Точный расчет количества кирпичей",
                "Определение материалов для кладки",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/brickwork-calculator-og.jpg ",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock ",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru ",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "120",
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
