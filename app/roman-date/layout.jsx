import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Конвертер даты в римские цифры онлайн | MMXXIV → 2024",
  description:
    "Онлайн конвертер даты в римские цифры. Быстро и точно переведите день, месяц и год в римский формат.",
  keywords: [
    "конвертер даты в римские цифры",
    "перевод даты в римские числа",
    "римские цифры онлайн",
    "дата в римском формате",
    "инструмент перевода чисел",
    "римская система счисления",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/roman-date",
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
    title: "Конвертер даты в римские цифры | BoxCalculators",
    description:
      "Онлайн инструмент для перевода даты в римские цифры. Подходит для оформления документов, татуировок, исторических проектов и обучения.",
    url: "/roman-date",
    type: "website",
    images: [
      {
        url: "/images/roman-date-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер даты в римские цифры от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер даты в римские цифры | BoxCalculators",
    description:
      "Бесплатный калькулятор для перевода даты в римские цифры. Простой и удобный интерфейс для работы с числами от 1 до 5000.",
    images: ["/images/roman-date-converter-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://boxcalculators.ru/roman-date " />

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
              name: "Конвертер даты в римские цифры",
              url: "https://boxcalculators.ru/roman-date ",
              description:
                "Онлайн инструмент для перевода даты в римские цифры. Подходит для оформления документов, татуировок, исторических задач и обучения.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод дня в римские цифры",
                "Перевод месяца в римские цифры",
                "Перевод года в римские цифры",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/roman-date-converter-og.jpg ",
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
                reviewCount: "120",
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
