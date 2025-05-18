import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор налога на доход | Расчет онлайн",
  description:
    "Онлайн калькулятор налога на доход от BoxCalculators. Рассчитайте сумму по разным ставкам (9%, 13%, 15%, 30%, 35%). Подходит для НДФЛ и других налогов на личные доходы за 2022–2024 годы.",
  keywords: [
    "калькулятор налога на доход",
    "расчет налога онлайн",
    "НДФЛ",
    "налоговые ставки",
    "9%",
    "13%",
    "15%",
    "30%",
    "35%",
    "финансовый калькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/income-tax",
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
    title: "Калькулятор налога на доход | BoxCalculators",
    description:
      "Инструмент для быстрого расчёта налога на доход по разным ставкам. Применяется для НДФЛ и других видов налоговых обязательств физических лиц.",
    url: "/income-tax",
    type: "website",
    images: [
      {
        url: "/images/income-tax-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор налога на доход от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор налога на доход | BoxCalculators",
    description:
      "Универсальный инструмент для расчёта налога на личные доходы по ставкам 9%, 13%, 15%, 30% и 35%. Идеально подходит для НДФЛ и прочих аналогичных налогов.",
    images: ["/images/income-tax-calculator-twitter.jpg"],
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

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор налога на доход",
              url: "https://boxcalculators.ru/income-tax ",
              description:
                "Онлайн инструмент для расчёта налога на доход по разным ставкам. Подходит для НДФЛ и других видов налогов на личные доходы за 2022–2024 годы.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт налога по разным ставкам",
                "Поддержка актуальных ставок (9%, 13%, 15%, 30%, 35%)",
                "Мгновенный результат",
                "Простой и понятный интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/income-tax-calculator-og.jpg ",
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
                ratingValue: "4.8",
                reviewCount: "125",
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
