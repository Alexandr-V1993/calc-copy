import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор роста ребенка онлайн | Точный прогноз по родителям",
  description:
    "Узнайте, каким может быть рост вашего ребенка во взрослом возрасте. Используйте наш калькулятор на основе данных о росте мамы и папы.",
  keywords: [
    "калькулятор роста ребенка",
    "прогноз роста ребенка",
    "расчет роста ребенка",
    "онлайн калькулятор",
    "рост будущего ребенка",
  ],
  alternates: {
    canonical: "/child-height",
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
    title: "Калькулятор роста ребенка онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для прогнозирования роста ребенка на основе данных о росте родителей. Простой и удобный интерфейс для точных расчетов.",
    url: "/child-height",
    type: "website",
    images: [
      {
        url: "/images/child-height-predictor-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор роста ребенка онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор роста ребенка онлайн | BoxCalculators",
    description:
      "Простой онлайн-инструмент для прогнозирования роста ребенка. Введите рост родителей и узнайте приблизительный рост малыша в будущем.",
    images: ["/images/child-height-predictor-twitter.jpg"],
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

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор роста будущего ребенка",
              url: "https://boxcalculators.ru/child-height",
              description:
                "Онлайн инструмент для прогнозирования роста ребенка на основе данных о росте родителей. Простой и удобный интерфейс для точных расчетов.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Прогноз роста ребенка",
                "Учет роста родителей",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/child-height-predictor-og.jpg ",
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
                ratingValue: "4.5",
                reviewCount: "75",
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
