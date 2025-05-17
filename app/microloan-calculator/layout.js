import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор микрозаймов | Расчет процентов онлайн",
  description:
    "Онлайн калькулятор микрозаймов: быстро рассчитайте проценты, переплату и платежи для грамотного финансового планирования.",
  keywords: [
    "микрозаймов калькулятор",
    "расчет микрозаймов",
    "проценты по микрозаймам",
    "переплата микрозаймы",
    "онлайн калькулятор займов",
  ],
  alternates: {
    canonical: "/microloan-calculator",
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
    title: "Калькулятор микрозаймов: расчет процентов онлайн",
    description:
      "Онлайн калькулятор микрозаймов: рассчитайте проценты, платежи и переплату для информированных финансовых решений.",
    url: "/microloan-calculator",
    type: "website",
    images: [
      {
        url: "/images/microloan-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор микрозаймов: расчет процентов онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор микрозаймов: расчет процентов онлайн",
    description:
      "Онлайн инструмент для расчета микрозаймов: проценты, переплата и платежи. Помогает принимать обоснованные финансовые решения.",
    images: ["/images/microloan-calculator-twitter.jpg"],
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
              name: "Калькулятор микрозаймов",
              url: "http://calcoffee.ru/microloan-calculator",
              description:
                "Онлайн инструмент для расчета микрозаймов: проценты, переплата и платежи. Помогает принимать обоснованные финансовые решения.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентов по микрозаймам",
                "Определение переплаты",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/microloan-calculator-og.jpg",
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
                reviewCount: "115",
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