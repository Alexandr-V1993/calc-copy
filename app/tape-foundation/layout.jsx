import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор ленточного фундамента | Расчет арматуры и бетона",
  description:
    "Быстрый и точный онлайн-калькулятор для расчета ленточного фундамента. Узнайте, сколько нужно арматуры, опалубки и бетона для вашего проекта.",
  keywords: [
    "калькулятор ленточного фундамента",
    "расчет арматуры",
    "расчет опалубки",
    "расчет бетона",
    "строительство фундамента",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/strip-foundation-calculator",
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
    title: "Онлайн калькулятор ленточного фундамента – расчет арматуры и бетона",
    description:
      "Быстрый и точный онлайн-калькулятор для расчета ленточного фундамента. Узнайте, сколько нужно арматуры, опалубки и бетона для вашего проекта.",
    url: "/strip-foundation-calculator",
    type: "website",
    images: [
      {
        url: "/images/strip-foundation-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор ленточного фундамента – расчет арматуры и бетона",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор ленточного фундамента – расчет арматуры и бетона",
    description:
      "Онлайн инструмент для расчета ленточного фундамента. Точные данные по арматуре, опалубке и бетону для вашего строительного проекта.",
    images: ["/images/strip-foundation-calculator-twitter.jpg"],
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
              name: "Калькулятор ленточного фундамента",
              url: "http://calcoffee.ru/strip-foundation-calculator",
              description:
                "Онлайн инструмент для расчета ленточного фундамента. Точные данные по арматуре, опалубке и бетону для вашего строительного проекта.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет количества арматуры",
                "Расчет объема бетона",
                "Расчет материалов для опалубки",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/strip-foundation-calculator-og.jpg",
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
                ratingValue: "4.7",
                reviewCount: "130",
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