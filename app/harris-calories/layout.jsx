import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор калорий по Харрису-Бенедикту | Точный расчет онлайн",
  description:
    "Онлайн инструмент для расчёта суточной нормы калорий по формуле Харриса-Бенедикта. Введите свои параметры, чтобы узнать точное значение энергозатрат.",
  keywords: [
    "калькулятор харриса-бенедикта",
    "формула харриса-бенедикта",
    "расчет калорий онлайн",
    "суточная норма калорий",
    "калории для похудения",
    "расчёт бжу харрис",
    "онлайн калькулятор вес",
  ],
  alternates: {
    canonical: "/harris-calories",
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
    title: "Калькулятор калорий по Харрису-Бенедикту | BoxCalculators",
    description:
      "Рассчитайте свою ежедневную потребность в калориях по классической формуле Харриса-Бенедикта. Простой и удобный интерфейс для мужчин и женщин.",
    url: "/harris-calories",
    type: "website",
    images: [
      {
        url: "/images/harris-benedict-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор калорий по Харрису-Бенедикту | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор калорий по Харрису-Бенедикту | BoxCalculators",
    description:
      "Узнайте свою суточную норму калорий с помощью онлайн-инструмента, основанного на формуле Харриса-Бенедикта. Подходит для мужчин и женщин всех возрастов.",
    images: ["/images/harris-benedict-calculator-twitter.jpg"],
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
              name: "Калькулятор Харриса-Бенедикта",
              url: "https://boxcalculators.ru/harris-calories ",
              description:
                "Инструмент для расчёта дневной нормы калорий по формуле Харриса-Бенедикта. Введите свои данные и получите точные значения BMR и активности.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт по формуле Харриса-Бенедикта",
                "Поддержка обоих полов",
                "Выбор уровня активности",
                "Цель: похудение, сохранение, набор массы",
                "Выдача КБЖУ",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/harris-benedict-calculator-og.jpg ",
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
                reviewCount: "58",
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
