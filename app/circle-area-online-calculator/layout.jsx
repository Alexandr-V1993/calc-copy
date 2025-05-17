import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор площади круга онлайн | Расчет",
  description:
    "Быстрый и удобный калькулятор для расчета площади круга. Введите радиус и получите мгновенный результат. Идеально подходит для студентов, инженеров и любителей математики.",
  keywords: [
    "калькулятор площади круга",
    "расчет площади круга",
    "онлайн калькулятор круга",
    "площадь круга",
    "математика",
    "инженерные расчеты",
  ],
  alternates: {
    canonical: "/circle-area-online-calculator",
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
    title: "Калькулятор площади круга онлайн | Calcoffee",
    description:
      "Быстрый и удобный калькулятор для расчета площади круга. Введите радиус и получите мгновенный результат. Идеально подходит для студентов, инженеров и любителей математики.",
    url: "/circle-area-online-calculator",
    type: "website",
    images: [
      {
        url: "/images/circle-area-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади круга онлайн | Calcoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади круга онлайн | Calcoffee",
    description:
      "Онлайн инструмент для расчета площади круга. Просто введите радиус, чтобы получить точный результат. Подходит для учебы, работы и хобби.",
    images: ["/images/circle-area-calculator-twitter.jpg"],
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
              name: "Калькулятор площади круга",
              url: "http://calcoffee.ru/circle-area-online-calculator",
              description:
                "Онлайн инструмент для расчета площади круга. Просто введите радиус, чтобы получить точный результат. Подходит для учебы, работы и хобби.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади круга по радиусу",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/circle-area-calculator-og.jpg",
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
                reviewCount: "120",
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