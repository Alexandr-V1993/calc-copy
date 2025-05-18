import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Конвертер величин | Онлайн перевод единиц измерения",
  description:
    "Онлайн-конвертер для перевода различных единиц измерения длины, веса, объема, температуры и других параметров. Быстро и точно преобразуйте значения между различными системами измерений.",
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
    title: "Конвертер величин онлайн | BoxCalculators",
    description:
      "Онлайн-инструмент для быстрого и точного перевода единиц измерения: длина, вес, объем, температура и другие. Удобно и бесплатно.",
    url: "/unit-converter",
    type: "website",
    images: [
      {
        url: "/images/unit-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер величин онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер величин онлайн | BoxCalculators",
    description:
      "Быстрый и удобный инструмент для перевода единиц измерения. Работает с длиной, массой, объемом, температурой и другими величинами.",
    images: ["/images/unit-converter-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Конвертер величин",
              url: "https://boxcalculators.ru/unit-converter ",
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
              image: "https://boxcalculators.ru/images/unit-converter-og.jpg ",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock ",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru ",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "250",
              },
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
