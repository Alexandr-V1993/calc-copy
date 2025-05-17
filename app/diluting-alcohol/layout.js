import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор разбавления спирта водой: точный расчет",
  description:
    "Определите идеальное содержание алкоголя с нашим онлайн-калькулятором разбавления спирта водой. Легко и быстро достигайте нужной крепости напитка.",
  keywords: [
    "калькулятор разбавления спирта",
    "содержание алкоголя",
    "расчет крепости",
    "разбавление спирта водой",
    "онлайн калькулятор алкоголя",
  ],
  alternates: {
    canonical: "/diluting-alcohol",
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
    title: "Калькулятор разбавления спирта водой: точный расчет",
    description:
      "Определите идеальное содержание алкоголя с нашим онлайн-калькулятором разбавления спирта водой. Легко и быстро достигайте нужной крепости напитка.",
    url: "/diluting-alcohol",
    type: "website",
    images: [
      {
        url: "/images/diluting-alcohol-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор разбавления спирта водой: точный расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор разбавления спирта водой: точный расчет",
    description:
      "Онлайн инструмент для точного расчета разбавления спирта водой. Просто введите данные, чтобы получить идеальное содержание алкоголя.",
    images: ["/images/diluting-alcohol-twitter.jpg"],
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
              name: "Калькулятор разбавления спирта водой",
              url: "http://calcoffee.ru/diluting-alcohol",
              description:
                "Онлайн инструмент для точного расчета разбавления спирта водой. Просто введите данные, чтобы получить идеальное содержание алкоголя.",
              applicationCategory: "AlcoholManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет разбавления спирта водой",
                "Точное определение крепости",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/diluting-alcohol-og.jpg",
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
                reviewCount: "80",
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