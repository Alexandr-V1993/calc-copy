import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Процентное превышение одного числа над другим",
  description:
    "Узнайте, на сколько процентов одно число больше другого с помощью нашего калькулятора. Введите два числа для мгновенного расчета.",
  keywords: [
    "процентное превышение",
    "калькулятор разницы",
    "процентное сравнение чисел",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/percentage-number-greater",
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
    title: "Процентное превышение одного числа над другим",
    description:
      "Узнайте, на сколько процентов одно число больше другого с помощью нашего калькулятора. Введите два числа для мгновенного расчета.",
    url: "/percentage-number-greater",
    type: "website",
    images: [
      {
        url: "/images/percentage-number-greater-og.jpg",
        width: 1200,
        height: 630,
        alt: "Процентное превышение одного числа над другим",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Процентное превышение одного числа над другим",
    description:
      "Онлайн инструмент для расчета процентного превышения одного числа над другим. Просто введите данные для мгновенного результата.",
    images: ["/images/percentage-number-greater-twitter.jpg"],
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
              name: "Процентное превышение одного числа над другим",
              url: "http://calcoffee.ru/percentage-number-greater",
              description:
                "Онлайн инструмент для расчета процентного превышения одного числа над другим. Просто введите данные для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного превышения",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/percentage-number-greater-og.jpg",
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
                ratingValue: "4.1",
                reviewCount: "40",
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