import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор дня недели | Определите день по дате онлайн",
  description:
    "Узнайте, какой день недели был в указанную дату. Введите любую дату рождения или событие — и мгновенно получите день недели.",
  keywords: [
    "калькулятор дня недели",
    "определение дня недели по дате",
    "день рождения по дате",
    "онлайн калькулятор дня недели",
    "день недели по дате рождения",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/weekday-finder",
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
    title: "Калькулятор дня недели | BoxCalculators",
    description:
      "Онлайн инструмент для определения дня недели по любой дате. Простой и быстрый способ узнать, в какой день недели вы родились или произошло важное событие.",
    url: "/weekday-finder",
    type: "website",
    images: [
      {
        url: "/images/birthday-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор дня недели от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор дня недели | BoxCalculators",
    description:
      "Бесплатный онлайн-инструмент для расчёта дня недели по дате рождения или любого события. Простой интерфейс и мгновенный результат.",
    images: ["/images/birthday-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://boxcalculators.ru/weekday-finder "
        />

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
              name: "Калькулятор дня недели",
              url: "https://boxcalculators.ru/weekday-finder ",
              description:
                "Инструмент для определения дня недели по дате рождения или любого события. Подходит для личного использования, планирования и исторических исследований.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Определение дня недели по дате",
                "Поддержка прошлых и будущих дат",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/birthday-og.jpg ",
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
                ratingValue: "4.5",
                reviewCount: "75",
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
