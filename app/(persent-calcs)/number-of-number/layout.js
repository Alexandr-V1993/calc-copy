import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Процентное соотношение одного числа к другому",
  description:
    "Используйте наш калькулятор, чтобы узнать, сколько процентов одно число составляет от другого. Просто введите два числа для мгновенного расчета по формуле: (Первое число / Второе число) * 100%.",
  keywords: [
    "процентное соотношение",
    "калькулятор процентов",
    "расчет процентов",
    "соотношение чисел",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/number-of-number",
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
    title: "Процентное соотношение одного числа к другому",
    description:
      "Используйте наш калькулятор, чтобы узнать, сколько процентов одно число составляет от другого. Просто введите два числа для мгновенного расчета по формуле: (Первое число / Второе число) * 100%.",
    url: "/number-of-number",
    type: "website",
    images: [
      {
        url: "/images/number-of-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Процентное соотношение одного числа к другому",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Процентное соотношение одного числа к другому",
    description:
      "Онлайн инструмент для расчета процентного соотношения двух чисел. Просто введите значения для мгновенного результата.",
    images: ["/images/number-of-number-twitter.jpg"],
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
              name: "Процентное соотношение одного числа к другому",
              url: "http://calcoffee.ru/number-of-number",
              description:
                "Онлайн инструмент для расчета процентного соотношения двух чисел. Просто введите значения для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процентного соотношения",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/number-of-number-og.jpg",
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
                reviewCount: "65",
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