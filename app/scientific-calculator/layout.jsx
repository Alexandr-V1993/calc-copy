import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Онлайн калькулятор | Точный расчет процентов, корней и выражений",
  description:
    "Бесплатный онлайн калькулятор от BoxCalculators. Выполняйте сложение, вычитание, умножение, деление, проценты и сложные выражения за секунды.",
  keywords: [
    "онлайн калькулятор",
    "научный калькулятор",
    "арифметические операции",
    "расчет процентов",
    "извлечение квадратного корня",
    "калькулятор с памятью",
    "точные вычисления онлайн",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/scientific-calculator",
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
    title: "Научный онлайн калькулятор | BoxCalculators",
    description:
      "Выполняйте точные математические расчёты: сложение, вычитание, умножение, деление, проценты и извлечение корня. Простой и удобный интерфейс для всех задач.",
    url: "/scientific-calculator",
    type: "website",
    images: [
      {
        url: "/images/regular-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Научный онлайн калькулятор от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Научный онлайн калькулятор | BoxCalculators",
    description:
      "Инструмент для выполнения арифметических и математических операций. Подходит для студентов, школьников, бухгалтеров и всех, кто работает с числами.",
    images: ["/images/regular-calculator-twitter.jpg"],
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
          href="https://boxcalculators.ru/scientific-calculator "
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
              name: "Научный калькулятор",
              url: "https://boxcalculators.ru/scientific-calculator ",
              description:
                "Онлайн инструмент для выполнения арифметических операций, процентных расчётов и других математических функций. Подходит как для работы, так и для учебных целей.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Сложение и вычитание",
                "Умножение и деление",
                "Расчёт процентов",
                "Извлечение квадратного корня",
                "Поддержка скобок и сложных формул",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
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
                ratingValue: "4.9",
                reviewCount: "200",
              },
              image:
                "https://boxcalculators.ru/images/regular-calculator-og.jpg ",
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
