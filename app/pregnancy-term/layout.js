import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор беременности | Расчет даты родов онлайн",
  description:
    "Рассчитайте предполагаемую дату родов (ПДР), возраст плода и текущую неделю беременности. Точный калькулятор для будущих мам и семей.",
  keywords: [
    "калькулятор беременности",
    "дата родов",
    "предполагаемая дата родов",
    "расчет срока беременности",
    "онлайн калькулятор беременности",
    "возраст плода",
    "беременность по неделям",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/pregnancy-term",
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
    title: "Калькулятор беременности | BoxCalculators",
    description:
      "Определите предполагаемую дату родов, срок беременности и возраст плода за секунды. Бесплатный и точный инструмент для будущих родителей.",
    url: "/pregnancy-term",
    type: "website",
    images: [
      {
        url: "/images/pregnancy-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор беременности от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор беременности | BoxCalculators",
    description:
      "Инструмент для расчёта даты родов, возраста плода и недели беременности. Простой и удобный интерфейс для будущих мам и семей.",
    images: ["/images/pregnancy-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://boxcalculators.ru/pregnancy-term "
        />

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
              name: "Калькулятор беременности",
              url: "https://boxcalculators.ru/pregnancy-term ",
              description:
                "Онлайн инструмент для расчёта даты родов, возраста плода и текущего срока беременности. Подходит для будущих родителей и медицинского применения.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт предполагаемой даты родов (ПДР)",
                "Определение недели беременности",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/pregnancy-calculator-og.jpg ",
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
                ratingValue: "4.9",
                reviewCount: "140",
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
