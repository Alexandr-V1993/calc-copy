import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор калорий по Харрису-Бенедикту | точный расчет",
  description:
    "Рассчитайте суточную потребность в калориях по классической формуле Харриса-Бенедикта. Подходит для мужчин и женщин, с учётом уровня физической активности и целей.",
  keywords: [
    "калькулятор харриса-бенедикт",
    "формула харриса-бенедикта",
    "расчет калорий онлайн",
    "суточная норма калорий",
    "калории для похудения",
    "расчёт бжу харрис",
    "онлайн калькулятор вес",
  ],
  alternates: {
    canonical: "/calculator-harris-benedict",
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
    title: "Калькулятор Харриса-Бенедикта | CalCoffee",
    description:
      "Онлайн-калькулятор расчёта калорий по формуле Харриса-Бенедикта. Точный результат для мужчин и женщин на основе возраста, роста, веса и активности.",
    url: "/calculator-harris-benedict",
    type: "website",
    images: [
      {
        url: "/images/harris-benedict-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор Харриса-Бенедикта | CalCoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор Харриса-Бенедикта | CalCoffee",
    description:
      "Используйте классическую формулу Харриса-Бенедикта для расчёта ежедневной потребности в калориях и макронутриентах.",
    images: ["/images/harris-benedict-calculator-twitter.jpg"],
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
              name: "Калькулятор Харриса-Бенедикта",
              url: "http://calcoffee.ru/calculator-harris-benedict",
              description:
                "Инструмент для расчёта дневной нормы калорий по формуле Харриса-Бенедикта. Введите свои параметры и получите точные данные о калориях и БЖУ.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт по формуле Харриса-Бенедикта",
                "Поддержка обоих полов",
                "Выбор уровня активности",
                "Цель: потеря веса, сохранение или набор массы",
                "Выдача КБЖУ",
              ],
              softwareVersion: "1.0.0",
              image: "http://calcoffee.ru/images/harris-benedict-calculator-og.jpg",
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
                reviewCount: "58",
              },
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}