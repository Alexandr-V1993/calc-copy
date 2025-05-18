import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор сложных процентов | Рассчитайте рост инвестиций онлайн",
  description:
    "Рассчитайте рост капитала по формуле сложных процентов. Бесплатный калькулятор для планирования инвестиций или банковских вкладов с реинвестированием.",
  keywords: [
    "калькулятор сложных процентов",
    "расчет сложного процента",
    "рост капитала",
    "инвестиции онлайн",
    "финансовое планирование",
    "начисление процентов",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/compound-interest",
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
    title: "Калькулятор сложных процентов | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта сложных процентов. Позволяет прогнозировать рост капитала от инвестиций или вклада за определённый период с учётом реинвестирования.",
    url: "/compound-interest",
    type: "website",
    images: [
      {
        url: "/images/compound-interest-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сложных процентов от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сложных процентов | BoxCalculators",
    description:
      "Бесплатный калькулятор сложных процентов. Узнайте, как ваши инвестиции будут расти со временем с учетом реинвестирования.",
    images: ["/images/compound-interest-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://boxcalculators.ru/compound-interest "
        />

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
              name: "Калькулятор сложных процентов",
              url: "https://boxcalculators.ru/compound-interest ",
              description:
                "Онлайн инструмент для расчёта сложных процентов. Позволяет прогнозировать рост капитала от инвестиций или банковского вклада.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт сложных процентов",
                "Прогноз роста капитала",
                "Поддержка реинвестирования",
                "Мгновенный результат",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/compound-interest-calculator-og.jpg ",
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
                reviewCount: "110",
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
