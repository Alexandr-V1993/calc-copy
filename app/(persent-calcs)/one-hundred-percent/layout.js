import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор 100% от числа | Найти полную сумму по проценту",
  description:
    "Мгновенно вычисляйте полную сумму (100%) по известному проценту. Идеально для финансовых расчетов, скидок и анализа данных. Формула: (Число × 100) / Процент.",
  keywords: [
    "калькулятор 100 процентов",
    "найти полную сумму по проценту",
    "расчет полной стоимости",
    "калькулятор обратных процентов",
    "вычислить 100% от части",
    "онлайн расчет общей суммы",
    "калькулятор исходного числа",
    "финансовые расчеты",
    "анализ процентных соотношений",
    "калькулятор скидок",
  ],
  alternates: {
    canonical: "/one-hundred-percent",
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
    title: "Онлайн калькулятор: найти 100% по известному проценту",
    description:
      "Профессиональный инструмент для вычисления полной суммы по известной части. Используйте для финансового анализа, расчетов скидок и бизнес-планирования.",
    url: "/one-hundred-percent",
    type: "website",
    images: [
      {
        url: "/images/one-hundred-percent-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор вычисления 100% от числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор нахождения полной суммы",
    description:
      "Быстро узнайте полную сумму (100%) по известному проценту. Точные расчеты для финансов и бизнеса.",
    images: ["/images/one-hundred-percent-twitter.jpg"],
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
              name: "Калькулятор нахождения 100% от числа",
              url: "https://boxcalculators.ru/one-hundred-percent",
              description:
                "Точный инструмент для вычисления полной суммы по известному проценту с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Вычисление полной суммы (100%)",
                "Работа с любыми процентами",
                "Подробная формула расчета",
                "Подходит для финансового анализа",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/one-hundred-percent-og.jpg",
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
                reviewCount: "92",
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
