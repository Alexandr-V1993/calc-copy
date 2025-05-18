import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор возраста онлайн | Точный расчет по дате рождения",
  description:
    "Онлайн калькулятор возраста от BoxCalculators. Рассчитайте свой возраст в годах, месяцах, неделях, днях, часах, минутах и секундах. Подходит для планирования событий и анализа временных промежутков.",
  keywords: [
    "калькулятор возраста",
    "расчет возраста",
    "возраст в днях",
    "возраст в неделях",
    "возраст в годах",
    "онлайн калькулятор",
    "дата рождения",
    "точный возраст",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/birth-date-calculator",
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
    title: "Калькулятор возраста онлайн | BoxCalculators",
    description:
      "Инструмент для точного расчёта возраста по дате рождения. Определите возраст в различных единицах времени: годы, месяцы, недели, дни, часы, минуты и секунды.",
    url: "/birth-date-calculator",
    type: "website",
    images: [
      {
        url: "/images/age-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор возраста онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор возраста онлайн | BoxCalculators",
    description:
      "Узнайте свой возраст точно и быстро. Расчёт в годах, месяцах, неделях, днях и даже секундах. Простой и удобный интерфейс.",
    images: ["/images/age-calculator-twitter.jpg"],
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
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор возраста онлайн",
              url: "https://boxcalculators.ru/birth-date-calculator ",
              description:
                "Онлайн инструмент для точного расчёта возраста по дате рождения. Показывает результат в годах, месяцах, неделях, днях, часах, минутах и секундах.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт возраста по дате рождения",
                "Мгновенный результат",
                "Поддержка прошлых и будущих дат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/age-calculator-og.jpg ",
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
                reviewCount: "150",
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
