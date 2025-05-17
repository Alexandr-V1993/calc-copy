import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Конвертер даты в римские цифры онлайн",
  description:
    "Конвертируйте дату в римские цифры с помощью нашего онлайн инструмента. Переведите день, месяц и год в римский формат быстро и легко.",
  keywords: [
    "конвертер даты в римские цифры",
    "римские цифры",
    "перевод даты в римские цифры",
    "римский формат даты",
    "онлайн конвертер римских чисел",
  ],
  alternates: {
    canonical: "/roman-date-converter",
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
    title: "Конвертер даты в римские цифры онлайн",
    description:
      "Конвертируйте дату в римские цифры с помощью нашего онлайн инструмента. Переведите день, месяц и год в римский формат быстро и легко.",
    url: "/roman-date-converter",
    type: "website",
    images: [
      {
        url: "/images/roman-date-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер даты в римские цифры онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер даты в римские цифры онлайн",
    description:
      "Онлайн инструмент для перевода даты в римские цифры. Быстро и легко конвертируйте день, месяц и год в римский формат.",
    images: ["/images/roman-date-converter-twitter.jpg"],
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
              name: "Конвертер даты в римские цифры",
              url: "http://calcoffee.ru/roman-date-converter",
              description:
                "Онлайн инструмент для перевода даты в римские цифры. Быстро и легко конвертируйте день, месяц и год в римский формат.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод дня в римские цифры",
                "Перевод месяца в римские цифры",
                "Перевод года в римские цифры",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/roman-date-converter-og.jpg",
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