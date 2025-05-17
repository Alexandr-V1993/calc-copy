import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Онлайн калькулятор досок - Точный расчет кубатуры и объема",
  description:
    "Точный онлайн-калькулятор для расчета количества и объема досок в кубических метрах. Быстро вычисляйте объем досок по заданным размерам для строительных и отделочных работ.",
  keywords: [
    "калькулятор досок",
    "расчет кубатуры досок",
    "объем досок",
    "количество досок",
    "онлайн калькулятор",
    "строительные материалы",
  ],
  alternates: {
    canonical: "/board-calculator",
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
    title: "Онлайн калькулятор досок - Точный расчет кубатуры и объема",
    description:
      "Точный онлайн-калькулятор для расчета количества и объема досок в кубических метрах. Быстро вычисляйте объем досок по заданным размерам для строительных и отделочных работ.",
    url: "/board-calculator",
    type: "website",
    images: [
      {
        url: "/images/board-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор досок - Точный расчет кубатуры и объема",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор досок - Точный расчет кубатуры и объема",
    description:
      "Онлайн инструмент для точного расчета количества и объема досок в кубических метрах. Простой и удобный интерфейс для строительных работ.",
    images: ["/images/board-calculator-twitter.jpg"],
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
              name: "Онлайн калькулятор досок",
              url: "http://calcoffee.ru/board-calculator",
              description:
                "Онлайн инструмент для точного расчета количества и объема досок в кубических метрах. Простой и удобный интерфейс для строительных работ.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет кубатуры досок",
                "Определение количества досок",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/board-calculator-og.jpg",
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
                reviewCount: "110",
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