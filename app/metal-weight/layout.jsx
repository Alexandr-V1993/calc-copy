import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса металла | Точный расчет онлайн",
  description:
    "Онлайн калькулятор металлопроката от BoxCalculators. Рассчитайте вес, длину и другие параметры стальных изделий по ГОСТ и ТУ за секунды.",
  keywords: [
    "калькулятор веса металла",
    "расчет металлопроката",
    "вес стали онлайн",
    "калькулятор по ГОСТ",
    "онлайн калькулятор металла",
    "металлические изделия",
    "инженерный калькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/metal-weight",
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
    title: "Калькулятор веса металла | BoxCalculators",
    description:
      "Инструмент для расчёта веса, объема и стоимости металлопроката. Поддерживает все типы сталей и стандартов ГОСТ для строительства, производства и закупок.",
    url: "/metal-weight",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса металла от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса металла | BoxCalculators",
    description:
      "Бесплатный инструмент для расчёта массы проката, труб, листов и других изделий из металла. Простой и точный интерфейс для профессионалов и частных лиц.",
    images: ["/images/metal-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://boxcalculators.ru/metal-weight " />

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
              name: "Калькулятор веса металла",
              url: "https://boxcalculators.ru/metal-weight ",
              description:
                "Онлайн инструмент для расчёта массы металлопроката, труб, листов и профиля по ГОСТам и ТУ. Подходит для строителей, инженеров и закупщиков.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт веса по ГОСТ и ТУ",
                "Поддержка разных форматов проката",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-og.jpg ",
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
                ratingValue: "4.6",
                reviewCount: "100",
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
