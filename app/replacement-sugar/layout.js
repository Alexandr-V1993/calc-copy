import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор замены сахара | Глюкоза, фруктоза, декстроза",
  description:
    "Онлайн-инструмент для точного расчета объема глюкозы, фруктозы или декстрозы при замене сахара в рецептах, напитках и самогоноварении.",
  keywords: [
    "калькулятор замены сахара",
    "глюкоза вместо сахара",
    "фруктоза замена сахара",
    "декстроза вместо сахара",
    "расчет глюкозы фруктозы декстрозы",
    "рецепты с заменой сахара",
  ],
  alternates: {
    canonical: "/replacement-sugar",
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
    title: "Калькулятор замены сахара онлайн | BoxCalculators",
    description:
      "Рассчитайте, сколько глюкозы, фруктозы или декстрозы нужно использовать вместо сахара. Точный и удобный инструмент для кулинаров, самогонщиков и производителей напитков.",
    url: "/replacement-sugar",
    type: "website",
    images: [
      {
        url: "/images/replacement-sugar-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор замены сахара онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор замены сахара онлайн | BoxCalculators",
    description:
      "Определите нужное количество глюкозы, фруктозы или декстрозы для замены сахара в ваших рецептах. Простой и понятный интерфейс для точных результатов.",
    images: ["/images/replacement-sugar-twitter.jpg"],
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
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор замены сахара",
              url: "https://boxcalculators.ru/replacement-sugar ",
              description:
                "Онлайн инструмент для расчёта эквивалентной замены сахара на глюкозу, фруктозу или декстрозу. Улучшите вкус и свойства ваших продуктов.",
              applicationCategory: "FoodApplication",
              operatingSystem: "Web",
              featureList: [
                "Замена сахара на глюкозу",
                "Замена сахара на фруктозу",
                "Замена сахара на декстрозу",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/replacement-sugar-og.jpg ",
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
                reviewCount: "135",
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
