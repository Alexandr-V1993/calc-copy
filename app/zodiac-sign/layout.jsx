import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор знака зодиака онлайн | Определите свой Знак",
  description:
    "Определите свой знак зодиака по дате рождения. Онлайн калькулятор BoxCalculators рассчитает ваш Зодиак и покажет основные характеристики вашего знака.",
  keywords: [
    "знак зодиака онлайн",
    "определение знака зодиака",
    "калькулятор зодиака",
    "астрологический калькулятор",
    "знак по дате рождения",
    "ваш зодиакальный знак",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/zodiac-sign",
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
    title: "Калькулятор знака зодиака онлайн | BoxCalculators",
    description:
      "Узнайте свой знак зодиака за секунды. Введите дату рождения и получите информацию о вашем Зодиаке, его чертах характера и особенностях.",
    url: "/zodiac-sign",
    type: "website",
    images: [
      {
        url: "/images/zodiac-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор знака зодиака от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор знака зодиака онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для определения вашего знака зодиака по дате рождения. Простой и удобный интерфейс для любителей астрологии.",
    images: ["/images/zodiac-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://boxcalculators.ru/zodiac-sign " />

        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор знака зодиака",
              url: "https://boxcalculators.ru/zodiac-sign ",
              description:
                "Инструмент для определения знака зодиака по дате рождения. Получите информацию о чертах характера, совместимости и других астрологических данных.",
              applicationCategory: "AstrologyApplication",
              operatingSystem: "Web",
              featureList: [
                "Определение знака зодиака по дате рождения",
                "Астрологические характеристики",
                "Мгновенный результат",
                "Простой интерфейс",
                "Совместимость по знакам",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/zodiac-calculator-og.jpg ",
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
                reviewCount: "190",
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
