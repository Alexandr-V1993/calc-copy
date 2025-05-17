import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор беременности | Расчет срока и даты родов",
  description:
    "Определите дату родов, возраст плода и текущую неделю беременности. Укажите срок беременности на основе последней менструации и длины цикла.",
  keywords: [
    "калькулятор беременности",
    "расчет срока беременности",
    "дата родов",
    "срок родов",
    "расчет недели беременности",
    "определение даты родов",
  ],
  alternates: {
    canonical: "/pregnancy-calculator",
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
    title: "Калькулятор беременности – расчет срока и даты родов",
    description:
      "Определите дату родов, возраст плода и текущую неделю беременности. Укажите срок беременности на основе последней менструации и длины цикла.",
    url: "/pregnancy-calculator",
    type: "website",
    images: [
      {
        url: "/images/pregnancy-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор беременности – расчет срока и даты родов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор беременности – расчет срока и даты родов",
    description:
      "Онлайн инструмент для определения даты родов, возраста плода и текущей недели беременности. Простой и удобный интерфейс для расчета срока беременности.",
    images: ["/images/pregnancy-calculator-twitter.jpg"],
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
              name: "Калькулятор беременности",
              url: "http://calcoffee.ru/pregnancy-calculator",
              description:
                "Онлайн инструмент для определения даты родов, возраста плода и текущей недели беременности. Простой и удобный интерфейс для расчета срока беременности.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет срока беременности",
                "Определение даты родов",
                "Текущая неделя беременности",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/pregnancy-calculator-og.jpg",
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
                reviewCount: "140",
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