import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Онлайн калькулятор: Быстрые и точные расчеты",
  description:
    "Многофункциональный онлайн калькулятор для выполнения арифметических операций: сложение, вычитание, умножение, деление и процентные расчеты. Подходит для работы с положительными и отрицательными числами.",
  keywords: [
    "онлайн калькулятор",
    "арифметический калькулятор",
    "расчеты онлайн",
    "калькулятор с процентами",
    "калькулятор для чисел",
  ],
  alternates: {
    canonical: "/regular-calculator",
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
    title: "Онлайн калькулятор: Быстрые и точные расчеты",
    description:
      "Многофункциональный онлайн калькулятор для выполнения арифметических операций: сложение, вычитание, умножение, деление и процентные расчеты. Подходит для работы с положительными и отрицательными числами.",
    url: "/regular-calculator",
    type: "website",
    images: [
      {
        url: "/images/regular-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор: Быстрые и точные расчеты",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор: Быстрые и точные расчеты",
    description:
      "Онлайн инструмент для выполнения арифметических операций: сложение, вычитание, умножение, деление и процентные расчеты. Простой интерфейс для быстрых и точных вычислений.",
    images: ["/images/regular-calculator-twitter.jpg"],
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
              name: "Онлайн калькулятор",
              url: "http://calcoffee.ru/regular-calculator",
              description:
                "Онлайн инструмент для выполнения арифметических операций: сложение, вычитание, умножение, деление и процентные расчеты. Простой интерфейс для быстрых и точных вычислений.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Сложение, вычитание, умножение, деление",
                "Расчет процентов",
                "Поддержка положительных и отрицательных чисел",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/regular-calculator-og.jpg",
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
                ratingValue: "4.9",
                reviewCount: "200",
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