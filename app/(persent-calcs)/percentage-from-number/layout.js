import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процента от числа с вычитанием | Точный онлайн расчет",
  description:
    "Мгновенно вычисляйте и вычитайте процент от любого числа. Идеально для расчета скидок, уменьшения сумм и финансовых корректировок. Формула: Число - (Число × Процент / 100).",
  keywords: [
    "калькулятор вычитания процента",
    "уменьшение числа на процент",
    "расчет скидки от суммы",
    "вычесть процент из числа",
    "онлайн калькулятор процентов",
    "финансовые расчеты с процентами",
    "калькулятор уменьшения суммы",
    "вычисление остатка после вычета",
    "процентные вычисления",
    "корректировка сумм",
  ],
  alternates: {
    canonical: "/percentage-from-number",
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
    title: "Калькулятор: вычесть процент из числа | Онлайн расчет",
    description:
      "Профессиональный инструмент для вычисления и вычитания процента из любой суммы. Используйте для финансовых расчетов, торговых скидок и корректировки бюджетов.",
    url: "/percentage-from-number",
    type: "website",
    images: [
      {
        url: "/images/percentage-from-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор вычитания процента из числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор вычитания процента",
    description:
      "Быстро вычислите и вычтите процент из любой суммы. Точные расчеты для финансов и бизнеса.",
    images: ["/images/percentage-from-number-twitter.jpg"],
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
              name: "Калькулятор вычитания процента из числа",
              url: "https://boxcalculators.ru/percentage-from-number",
              description:
                "Точный инструмент для вычисления и вычитания процента из любой суммы с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Вычисление процента от числа",
                "Вычитание процента из суммы",
                "Мгновенные результаты",
                "Подробная формула расчета",
                "Подходит для финансовых корректировок",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/percentage-from-number-og.jpg",
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
                reviewCount: "98",
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
