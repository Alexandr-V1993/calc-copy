import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор калорий по Миффлину-Сан Жеора | точный расчет",
  description:
    "Онлайн калькулятор калорий по формуле Миффлина-Сан Жеора. Рассчитайте свою суточную потребность в калориях, белках, жирах и углеводах за пару кликов.",
  keywords: [
    "калькулятор калорий миффлин",
    "формула миффлина-сан жеора",
    "расчет калорий онлайн",
    "суточная норма калорий",
    "калории для похудения",
    "формула миффлина женщины мужчины",
    "онлайн калькулятор вес",
  ],
  alternates: {
    canonical: "/calculator-mifflin-st-jeor",
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
    title: "Калькулятор калорий (Миффлин-Сан Жеора) | CalCoffee",
    description:
      "Точный расчет суточной потребности в калориях по формуле Миффлина-Сан Жеора. Подходит как для мужчин, так и для женщин.",
    url: "/calculator-mifflin-st-jeor",
    type: "website",
    images: [
      {
        url: "/images/mifflin-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор калорий по Миффлину-Сан Жеора",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор калорий по Миффлину-Сан Жеора | CalCoffee",
    description:
      "Рассчитайте суточную норму калорий по самой популярной формуле — Миффлина-Сан Жеора. Просто введите свои параметры и получите результат.",
    images: ["/images/mifflin-calculator-twitter.jpg"],
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
              name: "Калькулятор калорий (Миффлин-Сан Жеора)",
              url: "http://calcoffee.ru/calculator-mifflin-st-jeor",
              description:
                "Интерактивный инструмент для расчёта дневной потребности в калориях по формуле Миффлина-Сан Жеора. Поддерживает разные цели: похудение, набор массы, поддержание веса.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт по формуле Миффлина-Сан Жеора",
                "Поддержка разных полов",
                "Выбор уровня активности",
                "Цель: похудение, сохранение, набор мышечной массы",
                "Результат: БЖУ + КБЖУ",
              ],
              softwareVersion: "1.0.0",
              image: "http://calcoffee.ru/images/mifflin-calculator-og.jpg",
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
                reviewCount: "65",
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