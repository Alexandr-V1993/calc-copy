import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор Площади Комнаты - Точный Расчет",
  description:
    "Калькулятор расчета площади комнаты в квадратных метрах: введите длину и ширину, чтобы быстро и точно узнать площадь вашего помещения. Удобно и просто!",
  keywords: [
    "калькулятор площади комнаты",
    "расчет площади комнаты",
    "онлайн калькулятор площади",
    "квадратные метры",
    "измерение площади комнаты",
  ],
  alternates: {
    canonical: "/calculator-room-area",
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
    title: "Калькулятор Площади Комнаты Онлайн - Точный Расчет в Квадратных Метрах",
    description:
      "Калькулятор расчета площади комнаты в квадратных метрах: введите длину и ширину, чтобы быстро и точно узнать площадь вашего помещения. Удобно и просто!",
    url: "/calculator-room-area",
    type: "website",
    images: [
      {
        url: "/images/calculator-room-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор Площади Комнаты Онлайн - Точный Расчет в Квадратных Метрах",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор Площади Комнаты Онлайн - Точный Расчет в Квадратных Метрах",
    description:
      "Онлайн инструмент для точного расчета площади комнаты в квадратных метрах. Просто введите длину и ширину, чтобы получить результат.",
    images: ["/images/calculator-room-area-twitter.jpg"],
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
              name: "Калькулятор Площади Комнаты",
              url: "http://calcoffee.ru/calculator-room-area",
              description:
                "Онлайн инструмент для точного расчета площади комнаты в квадратных метрах. Просто введите длину и ширину, чтобы получить результат.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади комнаты",
                "Поддержка квадратных метров",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/calculator-room-area-og.jpg",
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
                ratingValue: "4.7",
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