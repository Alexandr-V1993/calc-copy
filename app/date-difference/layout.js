import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор дней: расчет времени между датами",
  description:
    "Рассчитайте количество дней между датами, включая рабочие дни и недели. Используйте наш калькулятор дат для планирования времени и отслеживания сроков.",
  keywords: [
    "калькулятор дней",
    "расчет дней",
    "интервал между датами",
    "рабочие дни",
    "калькулятор дат",
  ],
  alternates: {
    canonical: "/date-calculator",
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
    title: "Калькулятор дней: расчет времени между датами",
    description:
      "Рассчитайте количество дней между датами, включая рабочие дни и недели. Используйте наш калькулятор дат для планирования времени и отслеживания сроков.",
    url: "/date-calculator",
    type: "website",
    images: [
      {
        url: "/images/date-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор дней: расчет времени между датами",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор дней: расчет времени между датами",
    description:
      "Онлайн инструмент для расчета количества дней между датами, включая рабочие дни и недели. Простой и удобный интерфейс для планирования и отслеживания сроков.",
    images: ["/images/date-calculator-twitter.jpg"],
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
              name: "Калькулятор дней",
              url: "http://calcoffee.ru/date-calculator",
              description:
                "Онлайн инструмент для расчета количества дней между датами, включая рабочие дни и недели. Простой и удобный интерфейс для планирования и отслеживания сроков.",
              applicationCategory: "TimeManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет дней между датами",
                "Поддержка рабочих дней",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/date-calculator-og.jpg",
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
                reviewCount: "90",
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