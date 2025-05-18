import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процентов | Онлайн расчет разницы и соотношения",
  description:
    "Онлайн калькулятор процентов от BoxCalculators. Рассчитайте разницу между числами в процентах, прибавьте или вычтите процент, определите процентное соотношение. Подходит для финансовых и математических задач.",
  keywords: [
    "калькулятор процентов",
    "расчет процентов онлайн",
    "процентное соотношение",
    "процентная разница",
    "математический калькулятор",
    "финансовый калькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/financial-percent",
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
    title: "Калькулятор процентов | BoxCalculators",
    description:
      "Инструмент для расчёта процентов: разница между числами, прибавление и вычитание процента, процентное соотношение. Простой и точный онлайн-калькулятор для бизнеса и учебы.",
    url: "/financial-percent",
    type: "website",
    images: [
      {
        url: "/images/percent-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор процентов от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор процентов | BoxCalculators",
    description:
      "Рассчитывайте проценты быстро и точно. Найдите разницу, прибавьте или вычтите процент, определите соотношение чисел. Бесплатный и удобный инструмент.",
    images: ["/images/percent-calculator-twitter.jpg"],
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
              name: "Калькулятор процентов",
              url: "https://boxcalculators.ru/financial-percent ",
              description:
                "Онлайн инструмент для расчёта процентов: разница между числами, процентное соотношение, прибавление и вычитание процента. Простой и удобный интерфейс.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт разницы в процентах",
                "Прибавление и вычитание процента",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/percent-calculator-og.jpg ",
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
