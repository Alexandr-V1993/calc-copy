import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Процентное уменьшение числа",
  description:
    "Определите, на сколько процентов одно число меньше другого или насколько число уменьшилось, используя наш калькулятор. Введите оба числа для мгновенного расчета.",
  keywords: [
    "процентное уменьшение",
    "калькулятор процентов",
    "уменьшение числа",
    "расчет процентов",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/percentage-number-less",
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
    title: "Процентное уменьшение числа",
    description:
      "Определите, на сколько процентов одно число меньше другого или насколько число уменьшилось, используя наш калькулятор. Введите оба числа для мгновенного расчета.",
    url: "/percentage-number-less",
    type: "website",
    images: [
      {
        url: "/images/percentage-number-less-og.jpg",
        width: 1200,
        height: 630,
        alt: "Процентное уменьшение числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Процентное уменьшение числа",
    description:
      "Онлайн инструмент для расчета процентного уменьшения одного числа относительно другого. Просто введите данные для мгновенного результата.",
    images: ["/images/percentage-number-less-twitter.jpg"],
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
              name: "Процентное уменьшение числа",
              url: "http://calcoffee.ru/percentage-number-less",
              description:
                "Онлайн инструмент для расчета процентного уменьшения одного числа относительно другого. Просто введите данные для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного уменьшения",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/percentage-number-less-og.jpg",
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
                ratingValue: "4.0",
                reviewCount: "35",
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