import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор отбора голов | Точный расчет дистилляции",
  description:
    "Онлайн-инструмент для расчёта объема чистого спирта, вредных примесей и оптимального отбора голов при дистилляции. Улучшите качество вашего самогоноварения с помощью точных данных.",
  keywords: [
    "калькулятор отбора голов",
    "отбор фракций самогонки",
    "расчет головы тела хвостов",
    "дистилляция спирта",
    "самогон крепость",
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
    title: "Калькулятор отбора голов онлайн | BoxCalculators",
    description:
      "Рассчитайте объем «голов», «тела» и «хвостов» в вашем дистилляте. Повысьте качество напитка с помощью интуитивно понятного калькулятора.",
    url: "/head-selection",
    type: "website",
    images: [
      {
        url: "/images/head-selection-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор отбора голов онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор отбора голов онлайн | BoxCalculators",
    description:
      "Определите, сколько нужно отобрать «голов» и «хвостов» для получения качественного алкогольного продукта. Онлайн-инструмент для самогонщиков и виноделов.",
    images: ["/images/head-selection-twitter.jpg"],
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
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор отбора голов",
              url: "https://boxcalculators.ru/head-selection ",
              description:
                "Инструмент для расчёта объема голов, тела и хвостов при дистилляции. Подходит для самогоноварения, перегонки и контроля качества спирта.",
              applicationCategory: "DistillationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт объема чистого спирта",
                "Учет вредных компонентов",
                "Мгновенный результат",
                "Простой интерфейс",
                "Таблицы и советы по дистилляции",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/head-selection-og.jpg ",
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
                ratingValue: "4.5",
                reviewCount: "85",
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
