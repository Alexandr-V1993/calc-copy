import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор отбора голов: Оптимизация дистилляции",
  description:
    "Определите объем чистого спирта и вредных компонентов в дистилляте с нашим калькулятором отбора голов. Быстро и точно вычислите параметры для качественного отбора и улучшите процесс дистилляции.",
  keywords: [
    "калькулятор отбора голов",
    "оптимизация дистилляции",
    "расчет спирта",
    "вредные компоненты",
    "калькулятор дистиллята",
  ],
  alternates: {
    canonical: "/head-selection",
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
    title: "Калькулятор отбора голов: Оптимизация дистилляции",
    description:
      "Определите объем чистого спирта и вредных компонентов в дистилляте с нашим калькулятором отбора голов. Быстро и точно вычислите параметры для качественного отбора и улучшите процесс дистилляции.",
    url: "/head-selection",
    type: "website",
    images: [
      {
        url: "/images/head-selection-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор отбора голов: Оптимизация дистилляции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор отбора голов: Оптимизация дистилляции",
    description:
      "Онлайн инструмент для расчета объема чистого спирта и вредных компонентов в дистилляте. Улучшите качество отбора и оптимизируйте процесс дистилляции.",
    images: ["/images/head-selection-twitter.jpg"],
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
              name: "Калькулятор отбора голов",
              url: "http://calcoffee.ru/head-selection",
              description:
                "Онлайн инструмент для расчета объема чистого спирта и вредных компонентов в дистилляте. Улучшите качество отбора и оптимизируйте процесс дистилляции.",
              applicationCategory: "DistillationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема чистого спирта",
                "Определение вредных компонентов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/head-selection-og.jpg",
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
                reviewCount: "85",
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