import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://calcoffee.ru"),
  title: "Сумма прописью онлайн | Конвертер чисел в слова",
  description:
    "Быстро и точно преобразуйте числа в текст! Наш бесплатный онлайн-конвертер суммы прописью идеален для договоров, счетов, финансовых документов. Поддержка русского языка, разных валют и точное соответствие требованиям бухгалтерских документов.",
  keywords: [
    "сумма прописью онлайн",
    "конвертер чисел в текст",
    "сумма словами",
    "число прописью",
    "бесплатный конвертер",
    "бухгалтерские документы",
    "финансовые документы",
    "договора",
    "счета-фактуры",
    "рубли прописью",
    "доллары прописью",
    "евро прописью",
    "как писать сумму прописью",
    "правильное написание сумм",
    "генератор сумм прописью",
    "онлайн инструмент для бизнеса",
  ],
  alternates: {
    canonical: "/summapro",
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
    title: "Сумма прописью онлайн | Конвертер чисел в слова",
    description:
      "Быстро преобразуйте числа в текст для договоров и финансовых документов. Точный и бесплатный конвертер сумм прописью с поддержкой разных валют.",
    url: "/summapro",
    type: "website",
    images: [
      {
        url: "/images/summapro-og.jpg",
        width: 1200,
        height: 630,
        alt: "Сумма прописью онлайн | Конвертер чисел в слова",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сумма прописью онлайн | Конвертер чисел в слова",
    description:
      "Бесплатный онлайн-инструмент для преобразования числовых значений в текстовый формат для юридических и финансовых документов.",
    images: ["/images/summapro-twitter.jpg"],
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
        <meta
          name="google-site-verification"
          content="ueaW9-Ty2f1CJX6Fz60Robte2vEZ1nHWGdjXxaq09Fs"
        />
        <meta name="yandex-verification" content="8e171312279be75a" />

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Конвертер суммы прописью",
              url: "https://calcoffee.ru/summapro",
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
              image: "https://calcoffee.ru/images/summapro-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "CalCoffee",
                  url: "https://calcoffee.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
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