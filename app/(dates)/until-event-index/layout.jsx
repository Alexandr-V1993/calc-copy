import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор времени до события | Отсчет дней, часов, минут",
  description:
    "Рассчитайте точное количество дней, часов, минут и секунд до важного события. Онлайн-калькулятор BoxCalculators поможет спланировать дату или подготовиться к мероприятию.",
  keywords: [
    "калькулятор времени до события",
    "отсчет дней до даты",
    "сколько осталось до даты",
    "планирование событий",
    "таймер до события",
    "event countdown calculator",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/until-event-index",
  },
  openGraph: {
    title: "Калькулятор времени до события | BoxCalculators",
    description:
      "Определите, сколько времени осталось до важного события: в днях, часах, минутах и секундах. Простой и бесплатный инструмент для планирования и отслеживания сроков.",
    url: "/until-event-index",
    type: "website",
    images: [
      {
        url: "/images/event-countdown-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор времени до события от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор времени до события | BoxCalculators",
    description:
      "Узнайте, сколько времени осталось до важного события: дни рождения, свадьбы, экзамена или запуска проекта. Точный онлайн-инструмент для всех случаев жизни.",
    images: ["/images/until-event-index-twitter.jpg"],
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
          href="https://boxcalculators.ru/until-event-index "
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
              name: "Калькулятор времени до события",
              url: "https://boxcalculators.ru/until-event-index ",
              description:
                "Онлайн калькулятор времени до события. Рассчитайте разницу между сегодняшним днем и любой будущей или прошедшей датой — точно и бесплатно.",
              applicationCategory: "TimeManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт времени до события",
                "Поддержка прошлых и будущих дат",
                "Показ в днях, часах, минутах и секундах",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
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
                ratingValue: "4.8",
                reviewCount: "95",
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
