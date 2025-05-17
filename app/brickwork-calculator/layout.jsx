import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор кирпича | Точный расчет для кладки",
  description:
    "Используйте наш онлайн калькулятор кирпича для точного расчета количества кирпичей и необходимых материалов для кладки. Удобный инструмент для планирования строительных работ, подходящий как для профессионалов, так и для новичков. Экономьте время и деньги с нашим простым и быстрым расчетом.",
  keywords: [
    "калькулятор кирпича",
    "расчет кирпича",
    "количество кирпича",
    "кладка кирпича",
    "онлайн калькулятор",
    "материалы для кладки",
  ],
  alternates: {
    canonical: "/brick-calculator",
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
    title: "Калькулятор кирпича онлайн - Точный расчет количества кирпича и материалов для кладки",
    description:
      "Используйте наш онлайн калькулятор кирпича для точного расчета количества кирпичей и необходимых материалов для кладки. Удобный инструмент для планирования строительных работ, подходящий как для профессионалов, так и для новичков. Экономьте время и деньги с нашим простым и быстрым расчетом.",
    url: "/brick-calculator",
    type: "website",
    images: [
      {
        url: "/images/brick-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор кирпича онлайн - Точный расчет количества кирпича и материалов для кладки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор кирпича онлайн - Точный расчет количества кирпича и материалов для кладки",
    description:
      "Онлайн инструмент для точного расчета количества кирпичей и материалов для кладки. Простой и удобный интерфейс для профессионалов и новичков.",
    images: ["/images/brick-calculator-twitter.jpg"],
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
              name: "Калькулятор кирпича",
              url: "http://calcoffee.ru/brick-calculator",
              description:
                "Онлайн инструмент для точного расчета количества кирпичей и материалов для кладки. Простой и удобный интерфейс для профессионалов и новичков.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Точный расчет количества кирпичей",
                "Определение материалов для кладки",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/brick-calculator-og.jpg",
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
                reviewCount: "95",
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