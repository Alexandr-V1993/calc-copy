import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор скидок онлайн | Расчет цены и экономии",
  description:
    "Онлайн калькулятор скидок от BoxCalculators. Рассчитайте финальную цену после скидки или первоначальную цену до скидки, а также узнайте сумму экономии.",
  keywords: [
    "калькулятор скидок",
    "расчет цены со скидкой",
    "цена до скидки",
    "экономия при покупке",
    "онлайн калькулятор для покупок",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/price-with-discount",
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
    title: "Калькулятор скидок онлайн | BoxCalculators",
    description:
      "Бесплатный инструмент для расчёта цены после скидки, начальной стоимости товара и суммы, которую вы сэкономите. Простой и удобный интерфейс для быстрого подсчета.",
    url: "/price-with-discount",
    type: "website",
    images: [
      {
        url: "/images/discount-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор скидок онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор скидок онлайн | BoxCalculators",
    description:
      "Рассчитывайте цены и экономию за секунды. Удобный онлайн-инструмент для покупателей, маркетологов и бизнеса.",
    images: ["/images/discount-calculator-twitter.jpg"],
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
              name: "Калькулятор скидок",
              url: "https://boxcalculators.ru/price-with-discount ",
              description:
                "Онлайн инструмент для расчёта цены после скидки, начальной стоимости товара и суммы экономии. Простой и удобный интерфейс для быстрого подсчета.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт цены со скидкой",
                "Определение первоначальной цены",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/discount-calculator-og.jpg ",
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
                ratingValue: "4.7",
                reviewCount: "110",
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
