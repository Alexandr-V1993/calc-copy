import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор калорий по Миффлину-Сан Жеора | Точный расчет онлайн",
  description:
    "Онлайн-калькулятор для расчёта суточной потребности в калориях по формуле Миффлина-Сан Жеора. Подходит для мужчин и женщин, с разными уровнями активности.",
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
    canonical: "/mifflin-calories",
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
    title: "Калькулятор калорий по Миффлину-Сан Жеора | BoxCalculators",
    description:
      "Точный расчет дневной нормы калорий на основе ваших параметров: возраст, вес, рост, пол и уровень активности. Используется популярная формула Миффлина-Сан Жеора.",
    url: "/mifflin-calories",
    type: "website",
    images: [
      {
        url: "/images/mifflin-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор калорий по Миффлину-Сан Жеора | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор калорий по Миффлину-Сан Жеора | BoxCalculators",
    description:
      "Узнайте свою суточную норму калорий с помощью калькулятора, основанного на формуле Миффлина-Сан Жеора. Просто введите свои данные и получите точный результат.",
    images: ["/images/mifflin-calculator-twitter.jpg"],
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
              name: "Калькулятор калорий (Миффлин-Сан Жеора)",
              url: "https://boxcalculators.ru/mifflin-calories ",
              description:
                "Интерактивный инструмент для расчёта дневной потребности в калориях по формуле Миффлина-Сан Жеора. Поддерживает разные цели: похудение, набор массы, поддержание веса.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт по формуле Миффлина-Сан Жеора",
                "Поддержка разных полов",
                "Выбор уровня активности",
                "Цель: похудение, сохранение, набор мышечной массы",
                "Результат: КБЖУ",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/mifflin-calculator-og.jpg ",
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
                reviewCount: "65",
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
