import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Шифр Цезаря: онлайн шифрование и расшифровка текстов",
  description:
    "Используйте наш онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Поддерживаются как русский, так и английский текст.",
  keywords: [
    "Шифр Цезаря",
    "шифрование текста",
    "расшифровка текста",
    "онлайн шифратор",
    "Цезарь",
  ],
  alternates: {
    canonical: "/caesar-cipher",
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
    title: "Шифр Цезаря: онлайн шифрование и расшифровка текстов",
    description:
      "Используйте наш онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Поддерживаются как русский, так и английский текст.",
    url: "/caesar-cipher",
    type: "website",
    images: [
      {
        url: "/images/caesar-cipher-og.jpg",
        width: 1200,
        height: 630,
        alt: "Шифр Цезаря: онлайн шифрование и расшифровка текстов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Шифр Цезаря: онлайн шифрование и расшифровка текстов",
    description:
      "Онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Простой и удобный интерфейс для работы с русским и английским текстом.",
    images: ["/images/caesar-cipher-twitter.jpg"],
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
              name: "Шифр Цезаря",
              url: "http://calcoffee.ru/caesar-cipher",
              description:
                "Онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Простой и удобный интерфейс для работы с русским и английским текстом.",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web",
              featureList: [
                "Шифрование текста методом Цезаря",
                "Расшифровка текста",
                "Поддержка русского и английского языков",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/caesar-cipher-og.jpg",
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
                reviewCount: "80",
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