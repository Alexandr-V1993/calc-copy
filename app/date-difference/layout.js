import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор дней между датами | Точный расчет времени",
  description:
    "Онлайн калькулятор дней от BoxCalculators. Рассчитайте разницу между датами, включая рабочие дни, выходные и праздники. Идеально подходит для планирования, отслеживания сроков и юридических задач.",
  keywords: [
    "калькулятор дней",
    "интервал между датами",
    "рабочие дни",
    "расчет дат",
    "калькулятор дат",
    "планирование времени",
    "юридические сроки",
    "бухгалтерские расчеты",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/date-difference",
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
    title: "Калькулятор дней между датами | BoxCalculators",
    description:
      "Точный онлайн-инструмент для расчёта количества дней между двумя датами, включая рабочие дни, выходные и праздники. Полезен для планирования, юридических и финансовых задач.",
    url: "/date-difference",
    type: "website",
    images: [
      {
        url: "/images/date-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор дней между датами от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор дней между датами | BoxCalculators",
    description:
      "Рассчитывайте промежутки между датами точно и быстро. Включает учёт рабочих дней, выходных и государственных праздников России.",
    images: ["/images/date-calculator-twitter.jpg"],
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
              name: "Калькулятор дней",
              url: "https://boxcalculators.ru/date-difference ",
              description:
                "Онлайн инструмент для расчёта количества дней между двумя датами, включая рабочие дни, выходные и праздники. Простой и удобный интерфейс для планирования и анализа сроков.",
              applicationCategory: "TimeManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт дней между датами",
                "Поддержка рабочих дней с учётом праздников",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/date-calculator-og.jpg ",
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
                reviewCount: "90",
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
