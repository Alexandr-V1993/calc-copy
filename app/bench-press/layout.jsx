import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор жима лежа | Рассчитайте ваш 1ПМ",
  description:
    "Онлайн калькулятор для расчета одноповторного максимума в жиме лежа. Введите вес и количество повторений, чтобы получить точное значение силы.",
  keywords: [
    "калькулятор жима лежа",
    "одноповторный максимум",
    "расчет жима лежа",
    "1ПМ калькулятор",
    "силовые тренировки",
  ],
  alternates: {
    canonical: "/bench-press",
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
    title: "Калькулятор жима лежа онлайн | BoxCalculators",
    description:
      "Узнайте свой 1ПМ в жиме лежа за секунды. Простой и удобный инструмент для спортсменов, которые хотят прогрессировать в силовых тренировках.",
    url: "/bench-press",
    type: "website",
    images: [
      {
        url: "/images/bench-press-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор жима лежа онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор жима лежа онлайн | BoxCalculators",
    description:
      "Быстро рассчитайте ваш одноповторный максимум в жиме лежа. Подходит как новичкам, так и опытным атлетам.",
    images: ["/images/bench-press-calculator-twitter.jpg"],
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
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор жима лежа",
              url: "https://boxcalculators.ru/bench-press ",
              description:
                "Онлайн-инструмент для расчёта вашего одноповторного максимума (1ПМ) в жиме лежа. Точный и простой способ отслеживать прогресс в тренировках.",
              applicationCategory: "FitnessApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет одноповторного максимума",
                "Прогноз силовых показателей",
                "Мгновенный результат",
                "Простой интерфейс",
                "Точные формулы Бжицки, Эпли и Лэндера",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/bench-press-calculator-og.jpg ",
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
                reviewCount: "150",
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
