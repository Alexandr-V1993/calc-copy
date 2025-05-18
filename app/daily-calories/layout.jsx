import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор калорий онлайн | Расчет суточной нормы",
  description:
    "Рассчитайте свою ежедневную потребность в калориях, белках, жирах и углеводах. Формулы Миффлина-Сан Жеора и Харриса-Бенедикта для похудения, набора массы или сохранения веса.",
  keywords: [
    "калькулятор калорий",
    "расчет калорий",
    "суточная потребность в калориях",
    "формула Миффлина-Сан Жеора",
    "формула Харриса-Бенедикта",
    "белки жиры углеводы",
    "здоровое питание",
    "похудение",
    "набор массы",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/daily-calories",
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
    title: "Калькулятор калорий онлайн | BoxCalculators",
    description:
      "Определите свою суточную норму калорий с учётом целей: похудение, набор массы или поддержание веса. Поддерживаются формулы Миффлина-Сан Жеора и Харриса-Бенедикта.",
    url: "/daily-calories",
    type: "website",
    images: [
      {
        url: "/images/calorie-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор калорий онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор калорий онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта суточной нормы калорий, белков, жиров и углеводов. Точные формулы и простой интерфейс для достижения ваших целей.",
    images: ["/images/calorie-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://boxcalculators.ru/daily-calories "
        />

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
              name: "Калькулятор калорий",
              url: "https://boxcalculators.ru/daily-calories ",
              description:
                "Онлайн инструмент для расчета суточной потребности в калориях, белках, жирах и углеводах. Поддерживает формулы Миффлина-Сан Жеора и Харриса-Бенедикта.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт суточных калорий",
                "Поддержка формул Миффлина-Сан Жеора и Харриса-Бенедикта",
                "Определение БЖУ",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/calorie-calculator-og.jpg ",
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
                reviewCount: "90",
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
