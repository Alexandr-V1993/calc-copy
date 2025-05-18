import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор ИМТ | Онлайн расчет индекса массы тела",
  description:
    "Онлайн калькулятор индекса массы тела от BoxCalculators. Проверьте свой вес быстро и точно. Подходит для мужчин, женщин, подростков и детей. Узнайте, соответствует ли ваш вес норме или есть риски для здоровья.",
  keywords: [
    "калькулятор ИМТ",
    "расчет индекса массы тела",
    "ИМТ онлайн",
    "индекс массы тела",
    "ИМТ для мужчин",
    "ИМТ для женщин",
    "ИМТ для детей",
    "здоровый вес",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/bmi-calculator",
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
    title: "Калькулятор ИМТ | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта индекса массы тела (ИМТ). Подходит для всех возрастов и полов. Бесплатно и удобно проверьте свой вес и уровень здоровья.",
    url: "/bmi-calculator",
    type: "website",
    images: [
      {
        url: "/images/bmi-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор ИМТ от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор ИМТ | BoxCalculators",
    description:
      "Бесплатный онлайн-инструмент для расчёта индекса массы тела. Помогает определить здоровый вес у взрослых и детей. Простой интерфейс и точные результаты.",
    images: ["/images/bmi-calculator-twitter.jpg"],
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
              name: "Калькулятор ИМТ",
              url: "https://boxcalculators.ru/bmi-calculator ",
              description:
                "Онлайн инструмент для расчёта индекса массы тела (ИМТ). Подходит для мужчин, женщин, подростков и детей. Проверьте, находитесь ли вы в пределах нормы.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт ИМТ для мужчин",
                "Расчёт ИМТ для женщин",
                "Поддержка подростков и детей",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/bmi-calculator-og.jpg ",
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
                ratingValue: "4.8",
                reviewCount: "130",
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
