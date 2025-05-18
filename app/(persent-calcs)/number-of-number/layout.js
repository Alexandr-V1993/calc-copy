import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процентного соотношения чисел | Онлайн расчет %",
  description:
    "Мгновенно вычисляйте, сколько процентов составляет одно число от другого. Идеально для анализа данных, финансовых показателей и статистики. Формула: (Число1 / Число2) × 100%.",
  keywords: [
    "калькулятор процентного соотношения",
    "вычислить процент от числа",
    "онлайн расчет процентов",
    "соотношение чисел в процентах",
    "калькулятор доли числа",
    "процентное содержание",
    "расчет процента от суммы",
    "математический калькулятор",
    "финансовые проценты",
    "статистический анализ",
  ],
  alternates: {
    canonical: "/number-of-number",
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
    title: "Онлайн калькулятор процентного соотношения чисел",
    description:
      "Профессиональный инструмент для вычисления процентного соотношения двух значений. Используйте для финансового анализа, статистики и бизнес-расчетов.",
    url: "/number-of-number",
    type: "website",
    images: [
      {
        url: "/images/number-of-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор процентного соотношения чисел",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор % соотношения чисел",
    description:
      "Быстро узнайте, сколько процентов составляет одно число от другого. Точные расчеты для любых целей.",
    images: ["/images/number-of-number-twitter.jpg"],
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
              name: "Калькулятор процентного соотношения",
              url: "https://boxcalculators.ru/number-of-number",
              description:
                "Точный инструмент для вычисления процентного соотношения двух чисел с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного соотношения",
                "Мгновенные результаты",
                "Подробная формула расчета",
                "Подходит для финансового анализа",
                "Простое управление",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/number-of-number-og.jpg",
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
                ratingValue: "4.7",
                reviewCount: "89",
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
