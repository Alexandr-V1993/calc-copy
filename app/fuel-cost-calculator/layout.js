import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор расхода топлива: онлайн расчет затрат",
  description:
    "Рассчитайте расход топлива и оптимизируйте затраты с помощью нашего онлайн калькулятора. Узнайте точное потребление топлива и получите рекомендации для экономии на транспортных расходах.",
  keywords: [
    "калькулятор расхода топлива",
    "онлайн расчет топлива",
    "топливный расход",
    "экономия топлива",
    "транспортные расходы",
  ],
  alternates: {
    canonical: "/fuel-cost-calculator",
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
    title: "Калькулятор расхода топлива: онлайн расчет затрат",
    description:
      "Рассчитайте расход топлива и оптимизируйте затраты с помощью нашего онлайн калькулятора. Узнайте точное потребление топлива и получите рекомендации для экономии на транспортных расходах.",
    url: "/fuel-cost-calculator",
    type: "website",
    images: [
      {
        url: "/images/fuel-cost-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расхода топлива: онлайн расчет затрат",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расхода топлива: онлайн расчет затрат",
    description:
      "Онлайн инструмент для расчета расхода топлива и оптимизации затрат. Получите точные данные о потреблении топлива и сэкономьте на транспортных расходах.",
    images: ["/images/fuel-cost-calculator-twitter.jpg"],
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
              name: "Калькулятор расхода топлива",
              url: "http://calcoffee.ru/fuel-cost-calculator",
              description:
                "Онлайн инструмент для расчета расхода топлива и оптимизации затрат. Получите точные данные о потреблении топлива и сэкономьте на транспортных расходах.",
              applicationCategory: "TransportationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет расхода топлива",
                "Оптимизация затрат",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/fuel-cost-calculator-og.jpg",
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