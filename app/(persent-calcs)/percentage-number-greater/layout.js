import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title:
    "Калькулятор процентного превышения | На сколько % одно число больше другого",
  description:
    "Точный расчет процентного превышения одного числа над другим. Формула: ((Число1 - Число2) / Число2) × 100%. Идеально для сравнения показателей, роста цен и анализа данных.",
  keywords: [
    "калькулятор процентного превышения",
    "на сколько процентов больше",
    "сравнение чисел в процентах",
    "расчет роста показателей",
    "анализ увеличения значений",
    "калькулятор разницы в процентах",
    "процентное соотношение величин",
    "вычисление процентного роста",
    "сравнение статистических данных",
    "калькулятор изменения в %",
  ],
  alternates: {
    canonical: "/percentage-number-greater",
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
    title: "Онлайн калькулятор: на сколько % одно число больше другого",
    description:
      "Профессиональный инструмент для сравнения чисел в процентах. Вычисляйте рост показателей, изменение цен и другие процентные соотношения.",
    url: "/percentage-number-greater",
    type: "website",
    images: [
      {
        url: "/images/percentage-number-greater-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор процентного превышения чисел",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор процентного превышения",
    description:
      "Узнайте, на сколько процентов одно значение больше другого. Точные расчеты для анализа данных и сравнения показателей.",
    images: ["/images/percentage-number-greater-twitter.jpg"],
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
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор процентного превышения",
              url: "https://boxcalculators.ru/percentage-number-greater",
              description:
                "Точный инструмент для вычисления процентного соотношения двух чисел с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного превышения",
                "Сравнение любых числовых значений",
                "Подробная формула расчета",
                "Подходит для аналитики и статистики",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/percentage-number-greater-og.jpg",
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
                ratingValue: "4.6",
                reviewCount: "85",
                bestRating: "5",
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
