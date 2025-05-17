import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор роста будущего ребенка - Точный и быстрый расчет",
  description:
    "Калькулятор для предсказания роста ребенка на основе роста родителей. Узнайте, каким может быть рост вашего ребенка во взрослом возрасте.",
  keywords: [
    "калькулятор роста ребенка",
    "прогноз роста ребенка",
    "расчет роста ребенка",
    "онлайн калькулятор",
    "рост будущего ребенка",
  ],
  alternates: {
    canonical: "/child-height-predictor-calculator",
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
    title: "Калькулятор роста будущего ребенка - Точный и быстрый расчет",
    description:
      "Калькулятор для предсказания роста ребенка на основе роста родителей. Узнайте, каким может быть рост вашего ребенка во взрослом возрасте.",
    url: "/child-height-predictor-calculator",
    type: "website",
    images: [
      {
        url: "/images/child-height-predictor-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор роста будущего ребенка - Точный и быстрый расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор роста будущего ребенка - Точный и быстрый расчет",
    description:
      "Онлайн инструмент для прогнозирования роста ребенка на основе данных о росте родителей. Простой и удобный интерфейс для точных расчетов.",
    images: ["/images/child-height-predictor-twitter.jpg"],
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
              name: "Калькулятор роста будущего ребенка",
              url: "http://calcoffee.ru/child-height-predictor-calculator",
              description:
                "Онлайн инструмент для прогнозирования роста ребенка на основе данных о росте родителей. Простой и удобный интерфейс для точных расчетов.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Прогноз роста ребенка",
                "Учет роста родителей",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/child-height-predictor-og.jpg",
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
                ratingValue: "4.5",
                reviewCount: "75",
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