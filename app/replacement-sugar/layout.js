import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор замены сахара | Глюкоза, фруктоза, декстроза",
  description:
    "Рассчитайте, сколько глюкозы, фруктозы или декстрозы нужно для замены сахара в рецептах и напитках. Поддержите крепость и улучшите свойства вашего продукта.",
  keywords: [
    "калькулятор замены сахара",
    "глюкоза вместо сахара",
    "фруктоза замена сахара",
    "декстроза для замены сахара",
    "расчет глюкозы фруктозы декстрозы",
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
    title: "Калькулятор замены сахара | Глюкоза, фруктоза, декстроза",
    description:
      "Рассчитайте, сколько глюкозы, фруктозы или декстрозы нужно для замены сахара в рецептах и напитках. Поддержите крепость и улучшите свойства вашего продукта.",
    url: "/replacement-sugar",
    type: "website",
    images: [
      {
        url: "/images/replacement-sugar-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор замены сахара | Глюкоза, фруктоза, декстроза",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор замены сахара | Глюкоза, фруктоза, декстроза",
    description:
      "Онлайн инструмент для расчета замены сахара на глюкозу, фруктозу или декстрозу. Улучшите вкус и свойства ваших продуктов.",
    images: ["/images/replacement-sugar-twitter.jpg"],
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
              name: "Калькулятор замены сахара",
              url: "http://calcoffee.ru/replacement-sugar",
              description:
                "Онлайн инструмент для расчета замены сахара на глюкозу, фруктозу или декстрозу. Улучшите вкус и свойства ваших продуктов.",
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
              image: "http://calcoffee.ru/images/replacement-sugar-og.jpg",
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
                reviewCount: "135",
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