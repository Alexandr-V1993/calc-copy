import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Конвертер чисел в слова | Сумма прописью онлайн",
  description:
    "Бесплатный онлайн-инструмент для преобразования чисел в текстовые значения. Подходит для юридических документов, счетов, договоров и финансовых форм. Точное соответствие требованиям бухгалтерии.",
  keywords: [
    "конвертер чисел в слова",
    "сумма прописью онлайн",
    "число прописью",
    "сумма словами",
    "генератор сумм прописью",
    "договора",
    "счета-фактуры",
    "бухгалтерские документы",
    "финансовые документы",
    "рубли прописью",
    "доллары прописью",
    "евро прописью",
    "как писать сумму прописью",
    "правильное написание сумм",
    "онлайн инструмент для бизнеса",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/number-to-words",
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
    title: "Конвертер чисел в слова | BoxCalculators",
    description:
      "Онлайн-инструмент для перевода чисел в текст. Преобразуйте цифры в слова для использования в договорах, счетах, финансовых и юридических документах.",
    url: "/number-to-words",
    type: "website",
    images: [
      {
        url: "/images/number-to-words-og.jpg",
        width: 1200,
        height: 630,
        alt: "Конвертер чисел в слова | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Конвертер чисел в слова | BoxCalculators",
    description:
      "Преобразуйте числа в текст за секунды. Идеально подходит для заполнения договоров, счетов и других официальных документов.",
    images: ["/images/number-to-words-twitter.jpg"],
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
              name: "Конвертер чисел в слова",
              url: "https://boxcalculators.ru/number-to-words ",
              description:
                "Бесплатный онлайн-инструмент для преобразования числовых значений в текстовый формат для юридических и финансовых документов.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              featureList: [
                "Преобразование чисел в текст",
                "Поддержка разных валют",
                "Соответствие бухгалтерским требованиям",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/number-to-words-og.jpg ",
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
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
