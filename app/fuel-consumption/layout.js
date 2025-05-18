import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор расхода топлива | Расчет затрат и экономии",
  description:
    "Онлайн калькулятор расхода топлива от BoxCalculators. Рассчитайте потребление топлива, стоимость поездки и узнайте, как сэкономить на транспортных расходах.",
  keywords: [
    "калькулятор расхода топлива",
    "онлайн расчет топлива",
    "топливный калькулятор",
    "экономия на топливе",
    "расход топлива автомобиля",
    "стоимость поездки",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/fuel-consumption",
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
    title: "Калькулятор расхода топлива | BoxCalculators",
    description:
      "Рассчитайте расход топлива и затраты на поездку онлайн. Получите рекомендации по снижению топливных расходов и оптимизации бюджета на автомобиль.",
    url: "/fuel-consumption",
    type: "website",
    images: [
      {
        url: "/images/fuel-cost-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расхода топлива от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расхода топлива | BoxCalculators",
    description:
      "Бесплатный инструмент для расчёта расхода топлива, стоимости поездки и анализа эффективности вашего автомобиля.",
    images: ["/images/fuel-cost-calculator-twitter.jpg"],
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

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор расхода топлива",
              url: "https://boxcalculators.ru/fuel-consumption ",
              description:
                "Онлайн инструмент для расчёта расхода топлива, стоимости поездки и анализа эффективности использования автомобиля.",
              applicationCategory: "TransportationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт расхода топлива на 100 км",
                "Определение стоимости поездки",
                "Анализ экономии топлива",
                "Мгновенный результат",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/fuel-cost-calculator-og.jpg ",
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
                ratingValue: "4.6",
                reviewCount: "95",
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
