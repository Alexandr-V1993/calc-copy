import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор объема куба | Расчет",
  description:
    "Рассчитайте объем куба быстро и точно с помощью нашего онлайн калькулятора. Просто введите длину стороны куба, чтобы получить мгновенные результаты. Полезен для инженеров, студентов и всех, кому нужны точные вычисления объема. Удобный инструмент для работы и учебы!",
  keywords: [
    "калькулятор объема куба",
    "расчет объема куба",
    "онлайн калькулятор куба",
    "инженерные расчеты",
    "объем куба",
  ],
  alternates: {
    canonical: "/cube-volume-calculator",
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
    title: "Калькулятор объема куба - Точный и быстрый расчет",
    description:
      "Рассчитайте объем куба быстро и точно с помощью нашего онлайн калькулятора. Просто введите длину стороны куба, чтобы получить мгновенные результаты. Полезен для инженеров, студентов и всех, кому нужны точные вычисления объема. Удобный инструмент для работы и учебы!",
    url: "/cube-volume-calculator",
    type: "website",
    images: [
      {
        url: "/images/cube-volume-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор объема куба - Точный и быстрый расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор объема куба - Точный и быстрый расчет",
    description:
      "Онлайн инструмент для расчета объема куба. Просто введите длину стороны, чтобы получить точный результат. Идеально подходит для учебы и работы.",
    images: ["/images/cube-volume-calculator-twitter.jpg"],
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
              name: "Калькулятор объема куба",
              url: "http://calcoffee.ru/cube-volume-calculator",
              description:
                "Онлайн инструмент для расчета объема куба. Просто введите длину стороны, чтобы получить точный результат. Идеально подходит для учебы и работы.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема куба по длине стороны",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/cube-volume-calculator-og.jpg",
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