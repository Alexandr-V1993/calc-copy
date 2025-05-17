import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Онлайн калькулятор скидок | Расчет цены и экономии",
  description:
    "Онлайн калькулятор для определения окончательной цены после скидки или первоначальной цены до скидки при покупке с учетом сэкономленной суммы.",
  keywords: [
    "калькулятор скидок",
    "расчет скидки",
    "расчет цены со скидкой",
    "цена со скидкой",
    "экономия на скидке",
  ],
  alternates: {
    canonical: "/discount-calculator",
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
    title: "Онлайн калькулятор скидок: расчет цены и экономии",
    description:
      "Онлайн калькулятор для определения окончательной цены после скидки или первоначальной цены до скидки при покупке с учетом сэкономленной суммы.",
    url: "/discount-calculator",
    type: "website",
    images: [
      {
        url: "/images/discount-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор скидок: расчет цены и экономии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор скидок: расчет цены и экономии",
    description:
      "Онлайн инструмент для расчета цены со скидкой, первоначальной цены и суммы экономии. Простой и удобный интерфейс для быстрого подсчета.",
    images: ["/images/discount-calculator-twitter.jpg"],
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
              name: "Онлайн калькулятор скидок",
              url: "http://calcoffee.ru/discount-calculator",
              description:
                "Онлайн инструмент для расчета цены со скидкой, первоначальной цены и суммы экономии. Простой и удобный интерфейс для быстрого подсчета.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет цены со скидкой",
                "Определение первоначальной цены",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/discount-calculator-og.jpg",
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
                ratingValue: "4.7",
                reviewCount: "110",
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