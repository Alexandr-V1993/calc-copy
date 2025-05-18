import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор микрозаймов | Расчет процентов онлайн",
  description:
    "Онлайн калькулятор микрозаймов от BoxCalculators. Рассчитайте проценты, переплату и ежемесячные платежи по займу за считанные секунды.",
  keywords: [
    "калькулятор микрозаймов",
    "расчет микрозайма",
    "проценты по займам",
    "переплата по микрозаймам",
    "онлайн калькулятор займов",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/microloan-calculator",
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
    title: "Калькулятор микрозаймов | BoxCalculators",
    description:
      "Инструмент для расчёта условий микрозаймов: проценты, переплата, сроки погашения. Простой и удобный интерфейс для принятия финансовых решений.",
    url: "/microloan-calculator",
    type: "website",
    images: [
      {
        url: "/images/microloan-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор микрозаймов от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор микрозаймов | BoxCalculators",
    description:
      "Бесплатный инструмент для расчета займов: рассчитывайте проценты, переплату и платежи быстро и точно.",
    images: ["/images/microloan-calculator-twitter.jpg"],
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
              name: "Калькулятор микрозаймов",
              url: "https://boxcalculators.ru/microloan-calculator ",
              description:
                "Онлайн инструмент для расчёта микрозаймов: проценты, переплата, сроки погашения. Помогает принимать обоснованные финансовые решения.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт процентов по займам",
                "Определение общей переплаты",
                "Мгновенный результат",
                "Простой и понятный интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/microloan-calculator-og.jpg ",
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
                reviewCount: "115",
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
