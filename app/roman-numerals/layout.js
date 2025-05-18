import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Конвертер римских чисел | Перевод даты и цифр онлайн",
  description:
    "Переведите число или дату в римские цифры онлайн. Бесплатный и точный инструмент для образования, дизайна и исторических задач.",
  keywords: [
    "конвертер римских чисел",
    "перевод в римские цифры",
    "римские цифры онлайн",
    "дата в римском формате",
    "инструмент перевода чисел",
    "римская система счисления",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/roman-numerals",
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
    title: "Конвертер римских чисел | BoxCalculators",
    description:
      "Онлайн инструмент для перевода чисел и дат в римские цифры и обратно. Подходит как для учебных целей, так и для оформления документов, фильмов, игр и других проектов.",
    url: "/roman-numerals",
    type: "website",
    images: [
      {
        url: "/images/roman-date-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер римских чисел от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер римских чисел | BoxCalculators",
    description:
      "Бесплатный калькулятор для перевода чисел и дат в римские цифры. Простой и удобный интерфейс для работы с числами от 1 до 5000.",
    images: ["/images/roman-date-converter-twitter.jpg"],
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
          href="https://boxcalculators.ru/roman-numerals "
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
              name: "Конвертер римских чисел",
              url: "https://boxcalculators.ru/roman-numerals ",
              description:
                "Онлайн инструмент для перевода чисел и дат в римские цифры и обратно. Простой и быстрый калькулятор для всех пользовательских сценариев.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод чисел в римские цифры",
                "Преобразование даты в римский формат",
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
