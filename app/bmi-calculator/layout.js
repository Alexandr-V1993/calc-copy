import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор ИМТ: онлайн расчет индекса массы тела",
  description:
    "Проверьте свой вес с помощью нашего калькулятора ИМТ. Он подходит для всех: мужчин, женщин, подростков и детей. Узнайте, находитесь ли вы в пределах нормы или есть риск ожирения.",
  keywords: [
    "калькулятор ИМТ",
    "расчет индекса массы тела",
    "индекс массы тела",
    "ИМТ онлайн",
    "ИМТ для мужчин",
    "ИМТ для женщин",
    "ИМТ для детей",
  ],
  alternates: {
    canonical: "/imt",
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
    title: "Калькулятор ИМТ: онлайн расчет индекса массы тела",
    description:
      "Проверьте свой вес с помощью нашего калькулятора ИМТ. Он подходит для всех: мужчин, женщин, подростков и детей. Узнайте, находитесь ли вы в пределах нормы или есть риск ожирения.",
    url: "/imt",
    type: "website",
    images: [
      {
        url: "/images/imt-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор ИМТ: онлайн расчет индекса массы тела",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор ИМТ: онлайн расчет индекса массы тела",
    description:
      "Онлайн инструмент для расчета индекса массы тела (ИМТ). Подходит для мужчин, женщин, подростков и детей. Проверьте, находитесь ли вы в пределах нормы.",
    images: ["/images/imt-calculator-twitter.jpg"],
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
              name: "Калькулятор ИМТ",
              url: "http://calcoffee.ru/imt",
              description:
                "Онлайн инструмент для расчета индекса массы тела (ИМТ). Подходит для мужчин, женщин, подростков и детей. Проверьте, находитесь ли вы в пределах нормы.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет ИМТ для мужчин",
                "Расчет ИМТ для женщин",
                "Поддержка подростков и детей",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/imt-calculator-og.jpg",
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
                reviewCount: "130",
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