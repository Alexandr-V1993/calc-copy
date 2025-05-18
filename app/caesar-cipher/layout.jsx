import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Шифр Цезаря онлайн | Шифрование и расшифровка текста",
  description:
    "Онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Поддерживает русский и английский языки. Простой и быстрый калькулятор шифрования.",
  keywords: [
    "шифр Цезаря",
    "онлайн шифрование",
    "расшифровка текста",
    "шифр сдвига",
    "криптография онлайн",
    "код Цезаря",
    "boxcalculators",
    "boxcalculators.ru",
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
    title: "Шифр Цезаря онлайн | BoxCalculators",
    description:
      "Инструмент для шифрования и расшифровки текста методом Цезаря. Подходит как для обучения, так и для простого кодирования сообщений на русском и английском языках.",
    url: "/caesar-cipher",
    type: "website",
    images: [
      {
        url: "/images/caesar-cipher-og.jpg",
        width: 1200,
        height: 630,
        alt: "Шифр Цезаря онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Шифр Цезаря онлайн | BoxCalculators",
    description:
      "Бесплатный онлайн-инструмент для шифрования и расшифровки текста методом Цезаря. Идеально подходит для обучения криптографии и исторических задач.",
    images: ["/images/caesar-cipher-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://boxcalculators.ru/caesar-cipher " />

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
              name: "Шифр Цезаря",
              url: "https://boxcalculators.ru/caesar-cipher ",
              description:
                "Онлайн инструмент для шифрования и расшифровки текста методом Цезаря. Подходит для учебных целей, исторического моделирования и базового кодирования.",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web",
              featureList: [
                "Шифрование текста методом Цезаря",
                "Расшифровка текста по ключу",
                "Поддержка русского и английского языков",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/caesar-cipher-og.jpg ",
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
                ratingValue: "4.5",
                reviewCount: "80",
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
