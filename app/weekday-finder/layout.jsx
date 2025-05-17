import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Определение дня недели по дате рождения онлайн",
  description:
    "Узнайте, в какой день недели вы родились, и определите день недели для любой даты. Наш инструмент поможет вам быстро получить нужную информацию.",
  keywords: [
    "день недели по дате рождения",
    "калькулятор дня недели",
    "определение дня недели",
    "онлайн инструмент день недели",
    "день недели для даты",
  ],
  alternates: {
    canonical: "/birthday",
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
    title: "Определение дня недели по дате рождения онлайн",
    description:
      "Узнайте, в какой день недели вы родились, и определите день недели для любой даты. Наш инструмент поможет вам быстро получить нужную информацию.",
    url: "/birthday",
    type: "website",
    images: [
      {
        url: "/images/birthday-og.jpg",
        width: 1200,
        height: 630,
        alt: "Определение дня недели по дате рождения онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Определение дня недели по дате рождения онлайн",
    description:
      "Онлайн инструмент для определения дня недели по дате рождения или любой другой дате. Простой и удобный интерфейс.",
    images: ["/images/birthday-twitter.jpg"],
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
              name: "Определение дня недели по дате рождения",
              url: "http://calcoffee.ru/birthday",
              description:
                "Онлайн инструмент для определения дня недели по дате рождения или любой другой дате. Простой и удобный интерфейс.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Определение дня недели по дате",
                "Поддержка любых дат",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/birthday-og.jpg",
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
                reviewCount: "75",
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