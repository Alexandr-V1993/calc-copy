import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор суточного потребления воды",
  description:
    "Калькулятор для расчета рекомендуемого суточного потребления воды. Узнайте, сколько воды вам нужно пить каждый день для поддержания здоровья.",
  keywords: [
    "калькулятор воды",
    "суточное потребление воды",
    "расчет воды",
    "онлайн калькулятор",
    "сколько воды пить",
    "норма воды в день",
  ],
  alternates: {
    canonical: "/water-intake-calculator",
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
    title: "Калькулятор суточного потребления воды - Рассчитайте свою норму",
    description:
      "Калькулятор для расчета рекомендуемого суточного потребления воды. Узнайте, сколько воды вам нужно пить каждый день для поддержания здоровья.",
    url: "/water-intake-calculator",
    type: "website",
    images: [
      {
        url: "/images/water-intake-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор суточного потребления воды - Рассчитайте свою норму",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор суточного потребления воды - Рассчитайте свою норму",
    description:
      "Онлайн инструмент для расчета суточного потребления воды. Узнайте, сколько воды вам нужно пить ежедневно для поддержания здоровья.",
    images: ["/images/water-intake-calculator-twitter.jpg"],
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
              name: "Калькулятор суточного потребления воды",
              url: "http://calcoffee.ru/water-intake-calculator",
              description:
                "Онлайн инструмент для расчета суточного потребления воды. Узнайте, сколько воды вам нужно пить ежедневно для поддержания здоровья.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет суточной нормы воды",
                "Учет веса и активности",
                "Мгновенный результат",
                "Простой интерфейс",
                "Рекомендации по здоровью",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/water-intake-calculator-og.jpg",
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
                reviewCount: "220",
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