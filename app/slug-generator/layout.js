import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Генератор URL онлайн | Создание SEO-дружественных слагов",
  description:
    "Создавайте понятные и оптимизированные URL-слаги за секунды. Бесплатный инструмент создания человекопонятных адресов для улучшения пользовательского опыта и повышения ранжирования в поисковых системах.",
  keywords: [
    "генератор URL",
    "создание ЧПУ",
    "seo-оптимизация ссылок",
    "человекопонятный URL",
    "онлайн генератор слагов",
    "улучшение SEO",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/slug-generator",
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
    title: "Генератор URL онлайн | BoxCalculators",
    description:
      "Инструмент для создания дружественных к поисковым системам URL-адресов. Повышает удобство навигации и улучшает SEO вашего сайта или приложения.",
    url: "/slug-generator",
    type: "website",
    images: [
      {
        url: "/images/slugify-og.jpg",
        width: 1200,
        height: 630,
        alt: "Генератор URL от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Генератор URL онлайн | BoxCalculators",
    description:
      "Создавайте читабельные и SEO-оптимизированные URL-адреса. Простой и быстрый инструмент для маркетологов, контент-мейкеров и веб-разработчиков.",
    images: ["/images/slugify-twitter.jpg"],
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
          href="https://boxcalculators.ru/slug-generator "
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
              name: "Генератор URL",
              url: "https://boxcalculators.ru/slug-generator ",
              description:
                "Онлайн инструмент для создания человекопонятных и SEO-дружественных URL-адресов. Подходит для сайтов, блогов и веб-приложений.",
              applicationCategory: "SEOApplication",
              operatingSystem: "Web",
              featureList: [
                "Генерация читаемых URL",
                "Создание SEO-дружественных слагов",
                "Мгновенный результат",
                "Простой интерфейс",
                "Автоматическое преобразование строки",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/slugify-og.jpg ",
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
                ratingValue: "4.8",
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
