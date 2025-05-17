import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
  description:
    "Быстрый онлайн калькулятор для расчета плитного фундамента вашего дома, включая все необходимые параметры и характеристики для устройства бетонной плиты.",
  keywords: [
    "калькулятор плитного фундамента",
    "расчет фундамента",
    "фундаментная плита",
    "расчет бетона",
    "строительство фундамента",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/foundation-calculator",
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
    title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
    description:
      "Быстрый онлайн калькулятор для расчета плитного фундамента вашего дома, включая все необходимые параметры и характеристики для устройства бетонной плиты.",
    url: "/foundation-calculator",
    type: "website",
    images: [
      {
        url: "/images/foundation-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
    description:
      "Онлайн инструмент для точного расчета плитного фундамента. Удобный интерфейс для строительства дома с учетом всех параметров бетонной плиты.",
    images: ["/images/foundation-calculator-twitter.jpg"],
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
              name: "Калькулятор плитного фундамента",
              url: "http://calcoffee.ru/foundation-calculator",
              description:
                "Онлайн инструмент для точного расчета плитного фундамента. Удобный интерфейс для строительства дома с учетом всех параметров бетонной плиты.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет плитного фундамента",
                "Определение объема бетона",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/foundation-calculator-og.jpg",
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
                ratingValue: "4.6",
                reviewCount: "95",
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