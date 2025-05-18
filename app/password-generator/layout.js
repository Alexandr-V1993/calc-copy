import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Генератор паролей онлайн | Бесплатно и безопасно",
  description:
    "Создавайте надежные пароли за секунды. Наш бесплатный онлайн генератор паролей поможет защитить ваши аккаунты от взлома.",
  keywords: [
    "генератор паролей",
    "онлайн генератор паролей",
    "безопасные пароли",
    "уникальные пароли",
    "бесплатный генератор паролей",
    "менеджер паролей",
    "цифровая безопасность",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/password-generator",
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
    title: "Генератор паролей онлайн | BoxCalculators",
    description:
      "Бесплатный инструмент для создания сложных и уникальных паролей. Защитите свои учетные записи от несанкционированного доступа.",
    url: "/password-generator",
    type: "website",
    images: [
      {
        url: "/images/password-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Генератор паролей онлайн от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Генератор паролей онлайн | BoxCalculators",
    description:
      "Онлайн генератор безопасных паролей. Создавайте уникальные и устойчивые к взлому комбинации за считанные секунды.",
    images: ["/images/password-generator-twitter.jpg"],
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
              name: "Генератор паролей",
              url: "https://boxcalculators.ru/password-generator ",
              description:
                "Онлайн инструмент для генерации безопасных и уникальных паролей. Защитите свои данные с помощью надежных комбинаций.",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web",
              featureList: [
                "Генерация надежных паролей",
                "Поддержка уникальных комбинаций",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/password-generator-og.jpg ",
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
                reviewCount: "150",
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
