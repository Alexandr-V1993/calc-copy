import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Генератор паролей онлайн | Бесплатно и безопасно",
  description:
    "Быстро создавайте безопасные пароли онлайн. Наш бесплатный генератор паролей предлагает надежные и уникальные варианты для защиты ваших данных.",
  keywords: [
    "генератор паролей",
    "онлайн генератор",
    "безопасные пароли",
    "уникальные пароли",
    "бесплатный генератор паролей",
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
    title: "Генератор паролей онлайн | Бесплатно и безопасно",
    description:
      "Быстро создавайте безопасные пароли онлайн. Наш бесплатный генератор паролей предлагает надежные и уникальные варианты для защиты ваших данных.",
    url: "/password-generator",
    type: "website",
    images: [
      {
        url: "/images/password-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Генератор паролей онлайн | Бесплатно и безопасно",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Генератор паролей онлайн | Бесплатно и безопасно",
    description:
      "Онлайн инструмент для генерации безопасных и уникальных паролей. Защитите свои данные с помощью надежных комбинаций.",
    images: ["/images/password-generator-twitter.jpg"],
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
              name: "Генератор паролей",
              url: "http://calcoffee.ru/password-generator",
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
              image: "http://calcoffee.ru/images/password-generator-og.jpg",
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
                ratingValue: "4.9",
                reviewCount: "150",
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