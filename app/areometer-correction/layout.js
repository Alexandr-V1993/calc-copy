import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Корректор ареометра | Точная температурная коррекция дистиллята",
  description:
    "Онлайн-калькулятор для точной коррекции крепости дистиллята в зависимости от температуры. Удобный инструмент для самогонщиков, виноделов и любителей домашних напитков.",
  keywords: [
    "корректор ареометра",
    "температурная коррекция дистиллята",
    "калькулятор ареометра",
    "расчет крепости по температуре",
    "измерение алкоголя",
    "домашние напитки",
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
    title: "Корректор ареометра онлайн | BoxCalculators",
    description:
      "Используйте наш онлайн-инструмент для коррекции показаний ареометра на основе температуры дистиллята. Простой и точный расчет для самогоноварения и виноделия.",
    url: "/areometer-correction",
    type: "website",
    images: [
      {
        url: "/images/areometer-correction-og.jpg",
        width: 1200,
        height: 630,
        alt: "Корректор ареометра онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Корректор ареометра онлайн | BoxCalculators",
    description:
      "Узнайте реальную крепость дистиллята с учетом температуры. Интуитивно понятный калькулятор для самогонщиков и виноделов.",
    images: ["/images/areometer-correction-twitter.jpg"],
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
              name: "Корректор ареометра",
              url: "https://boxcalculators.ru/areometer-correction ",
              description:
                "Онлайн инструмент для точной коррекции крепости дистиллята в зависимости от его температуры. Позволяет получить достоверные данные без формул и таблиц.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Температурная коррекция крепости",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/areometer-correction-og.jpg ",
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
