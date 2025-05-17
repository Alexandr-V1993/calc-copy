import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Корректор ареометра: точная температурная коррекция дистиллята",
  description:
    "Используйте наш онлайн-калькулятор для точной коррекции крепости дистиллята в зависимости от температуры. Получите надежные результаты для точных измерений.",
  keywords: [
    "корректор ареометра",
    "температурная коррекция дистиллята",
    "калькулятор ареометра",
    "расчет крепости по температуре",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/areometer-correction",
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
    title: "Корректор ареометра: точная температурная коррекция дистиллята",
    description:
      "Используйте наш онлайн-калькулятор для точной коррекции крепости дистиллята в зависимости от температуры. Получите надежные результаты для точных измерений.",
    url: "/areometer-correction",
    type: "website",
    images: [
      {
        url: "/images/areometer-correction-og.jpg",
        width: 1200,
        height: 630,
        alt: "Корректор ареометра: точная температурная коррекция дистиллята",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Корректор ареометра: точная температурная коррекция дистиллята",
    description:
      "Онлайн инструмент для точной коррекции крепости дистиллята в зависимости от температуры. Простой и удобный интерфейс для надежных расчетов.",
    images: ["/images/areometer-correction-twitter.jpg"],
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
              name: "Корректор ареометра",
              url: "http://calcoffee.ru/areometer-correction",
              description:
                "Онлайн инструмент для точной коррекции крепости дистиллята в зависимости от температуры. Простой и удобный интерфейс для надежных расчетов.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Точная коррекция крепости по температуре",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/areometer-correction-og.jpg",
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
                reviewCount: "90",
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