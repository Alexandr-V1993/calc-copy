import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Онлайн калькулятор расчета бруса | Точный расчет",
  description:
    "Точный онлайн калькулятор расчета объема, площади и количества бруса в кубических метрах. Удобный инструмент для строительства и планирования. Рассчитайте необходимое количество бруса для вашего проекта с минимальными усилиями.",
  keywords: [
    "калькулятор бруса",
    "расчет объема бруса",
    "количество бруса",
    "объем бруса",
    "онлайн калькулятор",
    "строительные материалы",
  ],
  alternates: {
    canonical: "/timber-calculator",
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
    title: "Онлайн калькулятор расчета бруса - Точный расчет объема и количества",
    description:
      "Точный онлайн калькулятор расчета объема, площади и количества бруса в кубических метрах. Удобный инструмент для строительства и планирования. Рассчитайте необходимое количество бруса для вашего проекта с минимальными усилиями.",
    url: "/timber-calculator",
    type: "website",
    images: [
      {
        url: "/images/timber-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор расчета бруса - Точный расчет объема и количества",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор расчета бруса - Точный расчет объема и количества",
    description:
      "Онлайн инструмент для точного расчета объема, площади и количества бруса. Удобное решение для строительства и планирования.",
    images: ["/images/timber-calculator-twitter.jpg"],
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
              name: "Калькулятор расчета бруса",
              url: "http://calcoffee.ru/timber-calculator",
              description:
                "Онлайн инструмент для точного расчета объема, площади и количества бруса. Удобное решение для строительства и планирования.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема бруса",
                "Расчет площади покрытия",
                "Определение количества бруса",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/timber-calculator-og.jpg",
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
                reviewCount: "150",
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