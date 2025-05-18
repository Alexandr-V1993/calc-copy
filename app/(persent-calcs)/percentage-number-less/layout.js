import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процентного уменьшения | На сколько % число меньше",
  description:
    "Точный расчет процентного уменьшения одного числа относительно другого. Формула: ((Число2 - Число1) / Число2) × 100%. Идеально для анализа скидок, снижения показателей и статистических сравнений.",
  keywords: [
    "калькулятор процентного уменьшения",
    "на сколько процентов меньше",
    "расчет снижения в процентах",
    "вычисление уменьшения показателей",
    "анализ падения значений",
    "калькулятор разницы в процентах",
    "процентное уменьшение величины",
    "вычисление процентного снижения",
    "сравнение статистических данных",
    "калькулятор изменения в %",
  ],
  alternates: {
    canonical: "/percentage-number-less",
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
    title: "Онлайн калькулятор: на сколько % число меньше другого",
    description:
      "Профессиональный инструмент для анализа уменьшения показателей в процентах. Вычисляйте снижение цен, падение статистики и другие процентные изменения.",
    url: "/percentage-number-less",
    type: "website",
    images: [
      {
        url: "/images/percentage-number-less-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор процентного уменьшения чисел",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор процентного уменьшения",
    description:
      "Узнайте, на сколько процентов одно значение меньше другого. Точные расчеты для анализа данных и сравнения показателей.",
    images: ["/images/percentage-number-less-twitter.jpg"],
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
              name: "Калькулятор процентного уменьшения",
              url: "https://boxcalculators.ru/percentage-number-less",
              description:
                "Точный инструмент для вычисления процентного уменьшения одного числа относительно другого с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного уменьшения",
                "Анализ снижения показателей",
                "Подробная формула расчета",
                "Подходит для финансового анализа",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/percentage-number-less-og.jpg",
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
                ratingValue: "4.5",
                reviewCount: "78",
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
