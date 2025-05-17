import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор калорий | Точный расчет",
  description:
    "Калькулятор калорий определяет суточную потребность в белках, жирах и углеводах, основываясь на формулах Харриса-Бенедикта и Миффлина-Сан Жеора, чтобы помочь достичь желаемых весовых результатов.",
  keywords: [
    "калькулятор калорий",
    "расчет калорий",
    "суточная потребность",
    "белки",
    "жиры",
    "углеводы",
    "Харрис-Бенедикт",
    "Миффлин-Сан Жеор",
  ],
  alternates: {
    canonical: "/calorie-calculator",
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
    title: "Калькулятор калорий | Calcoffee",
    description:
      "Калькулятор калорий определяет суточную потребность в белках, жирах и углеводах, основываясь на формулах Харриса-Бенедикта и Миффлина-Сан Жеора, чтобы помочь достичь желаемых весовых результатов.",
    url: "/calorie-calculator",
    type: "website",
    images: [
      {
        url: "/images/calorie-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор калорий | Calcoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор калорий | Calcoffee",
    description:
      "Онлайн инструмент для расчета суточной потребности в калориях, белках, жирах и углеводах. Используйте формулы Харриса-Бенедикта и Миффлина-Сан Жеора для достижения целей по весу.",
    images: ["/images/calorie-calculator-twitter.jpg"],
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
              name: "Калькулятор калорий",
              url: "http://calcoffee.ru/calorie-calculator",
              description:
                "Онлайн инструмент для расчета суточной потребности в калориях, белках, жирах и углеводах. Используйте формулы Харриса-Бенедикта и Миффлина-Сан Жеора для достижения целей по весу.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет суточной потребности в калориях",
                "Поддержка формул Харриса-Бенедикта и Миффлина-Сан Жеора",
                "Определение белков, жиров и углеводов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/calorie-calculator-og.jpg",
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
                ratingValue: "4.6",
                reviewCount: "90",
              },
            }),
          }}
          suppressHydrationWarning // Подавление предупреждений о гидратации
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}