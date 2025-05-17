import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Определите Ваш Знак Зодиака онлайн",
  description:
    "Узнайте свой знак Зодиака за считанные секунды. Введите дату рождения в наш калькулятор и откройте астрологические тайны вашего знака.",
  keywords: [
    "знак Зодиака",
    "астрология",
    "калькулятор знака Зодиака",
    "определение знака Зодиака",
    "онлайн астрология",
  ],
  alternates: {
    canonical: "/zodiac-date",
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
    title: "Определите Ваш Знак Зодиака онлайн",
    description:
      "Узнайте свой знак Зодиака за считанные секунды. Введите дату рождения в наш калькулятор и откройте астрологические тайны вашего знака.",
    url: "/zodiac-date",
    type: "website",
    images: [
      {
        url: "/images/zodiac-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Определите Ваш Знак Зодиака онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Определите Ваш Знак Зодиака онлайн",
    description:
      "Онлайн калькулятор для определения знака Зодиака по дате рождения. Узнайте астрологические характеристики вашего знака.",
    images: ["/images/zodiac-calculator-twitter.jpg"],
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
              name: "Калькулятор знака Зодиака",
              url: "http://calcoffee.ru/zodiac-date",
              description:
                "Онлайн калькулятор для определения знака Зодиака по дате рождения. Узнайте астрологические характеристики вашего знака.",
              applicationCategory: "AstrologyApplication",
              operatingSystem: "Web",
              featureList: [
                "Определение знака Зодиака по дате рождения",
                "Астрологические характеристики",
                "Мгновенный результат",
                "Простой интерфейс",
                "Рекомендации по знакам Зодиака",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/zodiac-calculator-og.jpg",
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
                reviewCount: "190",
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