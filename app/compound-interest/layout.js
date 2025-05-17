import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор сложных процентов онлайн | Расчет прибыли",
  description:
    "Используйте наш калькулятор сложных процентов для вычисления роста вашего капитала. Быстро и просто рассчитайте, как ваши инвестиции увеличиваются со временем.",
  keywords: [
    "калькулятор сложных процентов",
    "расчет сложных процентов",
    "инвестиции",
    "рост капитала",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/compound-interest-calculator",
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
    title: "Калькулятор сложных процентов онлайн | Расчет прибыли",
    description:
      "Используйте наш калькулятор сложных процентов для вычисления роста вашего капитала. Быстро и просто рассчитайте, как ваши инвестиции увеличиваются со временем.",
    url: "/compound-interest-calculator",
    type: "website",
    images: [
      {
        url: "/images/compound-interest-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сложных процентов онлайн | Расчет прибыли",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сложных процентов онлайн | Расчет прибыли",
    description:
      "Онлайн инструмент для расчета сложных процентов и роста капитала. Просто введите данные для мгновенного результата. Идеально подходит для планирования инвестиций.",
    images: ["/images/compound-interest-calculator-twitter.jpg"],
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
              name: "Калькулятор сложных процентов",
              url: "http://calcoffee.ru/compound-interest-calculator",
              description:
                "Онлайн инструмент для расчета сложных процентов и роста капитала. Просто введите данные для мгновенного результата. Идеально подходит для планирования инвестиций.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет сложных процентов",
                "Прогноз роста капитала",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/compound-interest-calculator-og.jpg",
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