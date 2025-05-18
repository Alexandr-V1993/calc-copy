import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процентов: прибавление % к числу | Онлайн расчет",
  description:
    "Мгновенный расчет увеличения числа на процент. Добавьте нужный процент к любой сумме - идеально для расчетов цен, надбавок и повышений.",
  keywords: [
    "калькулятор процентов онлайн",
    "добавить процент к числу",
    "увеличение суммы на процент",
    "расчет надбавки",
    "калькулятор наценки",
    "вычислить процент от числа",
    "онлайн расчет процентов",
    "прибавить процент к сумме",
    "калькулятор повышения цены",
    "расчет индексации зарплаты",
  ],
  alternates: {
    canonical: "/add-percentage-number",
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
    title: "Онлайн калькулятор: прибавление процента к числу",
    description:
      "Простой и точный расчет увеличения числа на процент. Используйте для финансовых расчетов, ценовых надбавок и других вычислений.",
    url: "/add-percentage-number",
    type: "website",
    images: [
      {
        url: "/images/add-percentage-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор процентов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор прибавления процентов",
    description:
      "Мгновенно вычисляйте, как изменится число после добавления процента. Идеально для финансовых и бизнес-расчетов.",
    images: ["/images/add-percentage-number-twitter.jpg"],
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
              name: "Калькулятор прибавления процентов",
              url: "https://boxcalculators.ru/add-percentage-number",
              description:
                "Профессиональный инструмент для расчета увеличения числа на указанный процент. Подходит для финансовых, торговых и бытовых расчетов.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Прибавление процента к любому числу",
                "Мгновенный расчет результата",
                "Подходит для цен и зарплат",
                "Понятный интерфейс",
                "Точные вычисления",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/add-percentage-number-og.jpg",
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
                ratingValue: "4.8",
                reviewCount: "124",
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
