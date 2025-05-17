import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Конвертер величин",
  description:
    "Онлайн-конвертер для перевода различных единиц измерения: длины, веса, объема, температуры и других. Быстро и точно преобразуйте значения между различными системами измерений.",
  keywords: [
    "конвертер величин",
    "онлайн конвертер",
    "перевод единиц измерения",
    "калькулятор величин",
    "единицы измерения",
    "длина",
    "вес",
    "объем",
    "температура",
  ],
  alternates: {
    canonical: "/unit-converter",
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
    title: "Конвертер величин: онлайн перевод единиц измерения",
    description:
      "Онлайн-конвертер для перевода различных единиц измерения: длины, веса, объема, температуры и других. Быстро и точно преобразуйте значения между различными системами измерений.",
    url: "/unit-converter",
    type: "website",
    images: [
      {
        url: "/images/unit-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер величин: онлайн перевод единиц измерения",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер величин: онлайн перевод единиц измерения",
    description:
      "Онлайн инструмент для быстрого и точного перевода единиц измерения: длины, веса, объема, температуры и других. Удобный интерфейс для работы с различными системами измерений.",
    images: ["/images/unit-converter-twitter.jpg"],
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
              name: "Конвертер величин",
              url: "http://calcoffee.ru/unit-converter",
              description:
                "Онлайн инструмент для быстрого и точного перевода единиц измерения: длины, веса, объема, температуры и других. Удобный интерфейс для работы с различными системами измерений.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод единиц длины",
                "Перевод единиц веса",
                "Перевод единиц объема",
                "Перевод единиц температуры",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/unit-converter-og.jpg",
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
                reviewCount: "250",
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