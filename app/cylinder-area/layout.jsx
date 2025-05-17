import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор площади поверхности цилиндра | Расчет",
  description:
    "Используйте наш онлайн калькулятор для мгновенного расчета площади поверхности цилиндра. Введите радиус и высоту, чтобы получить точные результаты. Идеально подходит для расчетов в инженерии, образовании и проектировании. Экономьте время с нашим удобным инструментом!",
  keywords: [
    "калькулятор площади цилиндра",
    "расчет площади поверхности цилиндра",
    "онлайн калькулятор цилиндра",
    "инженерные расчеты",
    "площадь цилиндра",
  ],
  alternates: {
    canonical: "/cylinder-surface-area-calculator",
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
    title: "Калькулятор площади поверхности цилиндра - Точный и быстрый расчет",
    description:
      "Используйте наш онлайн калькулятор для мгновенного расчета площади поверхности цилиндра. Введите радиус и высоту, чтобы получить точные результаты. Идеально подходит для расчетов в инженерии, образовании и проектировании. Экономьте время с нашим удобным инструментом!",
    url: "/cylinder-surface-area-calculator",
    type: "website",
    images: [
      {
        url: "/images/cylinder-surface-area-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади поверхности цилиндра - Точный и быстрый расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади поверхности цилиндра - Точный и быстрый расчет",
    description:
      "Онлайн инструмент для расчета площади поверхности цилиндра. Просто введите радиус и высоту для получения точных результатов. Подходит для учебы, работы и проектирования.",
    images: ["/images/cylinder-surface-area-calculator-twitter.jpg"],
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
              name: "Калькулятор площади поверхности цилиндра",
              url: "http://calcoffee.ru/cylinder-surface-area-calculator",
              description:
                "Онлайн инструмент для расчета площади поверхности цилиндра. Просто введите радиус и высоту для получения точных результатов. Подходит для учебы, работы и проектирования.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади поверхности цилиндра",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/cylinder-surface-area-calculator-og.jpg",
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
                ratingValue: "4.5",
                reviewCount: "85",
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