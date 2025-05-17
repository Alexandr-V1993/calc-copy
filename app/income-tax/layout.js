import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор НДФЛ | Расчет налога онлайн",
  description:
    "Калькулятор НДФЛ онлайн: расчет налога по разным ставкам (9%, 13%, 15%, 30%, 35%) за 2022-2024 годы. Получите точные результаты моментально!",
  keywords: [
    "калькулятор НДФЛ",
    "расчет НДФЛ онлайн",
    "налог на доходы",
    "НДФЛ ставки",
    "9%",
    "13%",
    "15%",
    "30%",
    "35%",
  ],
  alternates: {
    canonical: "/ndfl",
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
    title: "Калькулятор НДФЛ: расчет налога онлайн",
    description:
      "Калькулятор НДФЛ онлайн: расчет налога по разным ставкам (9%, 13%, 15%, 30%, 35%) за 2022-2024 годы. Получите точные результаты моментально!",
    url: "/ndfl",
    type: "website",
    images: [
      {
        url: "/images/ndfl-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор НДФЛ: расчет налога онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор НДФЛ: расчет налога онлайн",
    description:
      "Онлайн инструмент для расчета НДФЛ по ставкам 9%, 13%, 15%, 30%, 35%. Точные результаты за 2022-2024 годы. Простой и удобный интерфейс.",
    images: ["/images/ndfl-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="CalCoffee" />
        <meta name="author" content="CalCoffee" />
        <meta name="copyright" content="CalCoffee" />
        <meta name="rating" content="general" />

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор НДФЛ",
              url: "http://calcoffee.ru/ndfl",
              description:
                "Онлайн инструмент для расчета НДФЛ по ставкам 9%, 13%, 15%, 30%, 35%. Точные результаты за 2022-2024 годы. Простой и удобный интерфейс.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет НДФЛ по разным ставкам",
                "Поддержка актуальных ставок (9%, 13%, 15%, 30%, 35%)",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/ndfl-calculator-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "CalCoffee",
                  url: "http://calcoffee.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "125",
              },
            }),
          }}
          suppressHydrationWarning // Подавление предупреждений о гидратации
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}