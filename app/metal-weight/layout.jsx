import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса металла | Точный расчет онлайн",
  description:
    "Калькулятор металлопроката: точные расчеты веса и других параметров для всех марок стали по ГОСТам и ТУ. Простой и удобный онлайн-инструмент.",
  keywords: [
    "калькулятор веса металла",
    "металлопрокат расчет",
    "вес стали онлайн",
    "расчет металла ГОСТ",
    "онлайн калькулятор металла",
  ],
  alternates: {
    canonical: "/metal-calculators",
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
    title: "Калькулятор веса металла: точный расчет онлайн",
    description:
      "Калькулятор металлопроката: точные расчеты веса и других параметров для всех марок стали по ГОСТам и ТУ. Простой и удобный онлайн-инструмент.",
    url: "/metal-calculators",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса металла: точный расчет онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса металла: точный расчет онлайн",
    description:
      "Онлайн инструмент для точного расчета веса металла и других параметров металлопроката. Удобный интерфейс для работы с ГОСТами и ТУ.",
    images: ["/images/metal-calculator-twitter.jpg"],
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
              name: "Калькулятор веса металла",
              url: "http://calcoffee.ru/metal-calculators",
              description:
                "Онлайн инструмент для точного расчета веса металла и других параметров металлопроката. Удобный интерфейс для работы с ГОСТами и ТУ.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса металла",
                "Поддержка ГОСТов и ТУ",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-og.jpg",
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
                ratingValue: "4.6",
                reviewCount: "100",
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