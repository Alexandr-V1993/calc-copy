import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Генератор URL: Создание читаемых ссылок онлайн",
  description:
    "Используйте наш генератор URL для создания понятных и SEO-дружественных ссылок. Улучшите пользовательский опыт и видимость в поисковых системах с помощью удобного инструмента для генерации ЧПУ-адресов.",
  keywords: [
    "генератор URL",
    "создание ЧПУ ссылок",
    "генератор ссылок онлайн",
    "улучшение SEO",
    "удобные URL",
  ],
  alternates: {
    canonical: "/slugify",
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
    title: "Генератор URL: Создание читаемых ссылок онлайн",
    description:
      "Используйте наш генератор URL для создания понятных и SEO-дружественных ссылок. Улучшите пользовательский опыт и видимость в поисковых системах с помощью удобного инструмента для генерации ЧПУ-адресов.",
    url: "/slugify",
    type: "website",
    images: [
      {
        url: "/images/slugify-og.jpg",
        width: 1200,
        height: 630,
        alt: "Генератор URL: Создание читаемых ссылок онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Генератор URL: Создание читаемых ссылок онлайн",
    description:
      "Онлайн инструмент для создания понятных и SEO-оптимизированных URL. Улучшите пользовательский опыт и видимость в поисковых системах.",
    images: ["/images/slugify-twitter.jpg"],
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
              name: "Генератор URL",
              url: "http://calcoffee.ru/slugify",
              description:
                "Онлайн инструмент для создания понятных и SEO-оптимизированных URL. Улучшите пользовательский опыт и видимость в поисковых системах.",
              applicationCategory: "SEOApplication",
              operatingSystem: "Web",
              featureList: [
                "Генерация читаемых URL",
                "Создание SEO-дружественных ссылок",
                "Поддержка различных символов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/slugify-og.jpg",
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
                ratingValue: "4.8",
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