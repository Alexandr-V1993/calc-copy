import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор налогов онлайн | Расчет суммы и выделение",
  description:
    "Онлайн калькулятор налогов от BoxCalculators: быстро рассчитайте сумму с налогом или выделите налог из общей суммы. Поддерживает ставки 0%, 10%, 20%. Простой и удобный инструмент для расчётов.",
  keywords: [
    "калькулятор налогов",
    "расчет налога онлайн",
    "выделение налога",
    "ставка налога 20%",
    "ставка налога 10%",
    "ставка налога 0%",
    "финансовые расчеты",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/tax-calculator",
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
    title: "Калькулятор налогов онлайн | BoxCalculators",
    description:
      "Универсальный онлайн инструмент для расчёта налогов по разным ставкам. Введите сумму, выберите ставку и получите точный результат за секунду.",
    url: "/tax-calculator",
    type: "website",
    images: [
      {
        url: "/images/tax-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор налогов онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор налогов онлайн | BoxCalculators",
    description:
      "Бесплатный калькулятор налогов. Рассчитывает сумму с налогом или выделяет налог по ставкам 0%, 10% и 20%. Идеально подходит для бизнеса и личных финансов.",
    images: ["/images/tax-calculator-twitter.jpg"],
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
              name: "Калькулятор налогов",
              url: "https://boxcalculators.ru/tax-calculator ",
              description:
                "Онлайн инструмент для расчёта налогов по разным ставкам. Позволяет вычислить сумму с налогом или выделить налог из общей суммы.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт налога по ставкам 0%, 10%, 20%",
                "Выделение налога из общей суммы",
                "Мгновенный результат",
                "Простой и понятный интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/tax-calculator-og.jpg ",
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
