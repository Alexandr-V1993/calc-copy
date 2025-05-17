import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор типа фигуры онлайн | Расчет онлайн",
  description:
    "Каждая женщина стремится верить в то, что её фигура безупречна, но существует ли в реальности такой идеал? Известные модельные параметры 90x60x90 часто считаются стандартом на подиуме, однако и они со временем теряют свою актуальность.",
  keywords: [
    "калькулятор типа фигуры",
    "онлайн калькулятор",
    "идеальная фигура",
    "типы женских фигур",
    "параметры 90x60x90",
  ],
  alternates: {
    canonical: "/body-type-calculator",
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
    title: "Калькулятор типа фигуры онлайн | Calcoffee",
    description:
      "Каждая женщина стремится верить в то, что её фигура безупречна, но существует ли в реальности такой идеал? Известные модельные параметры 90x60x90 часто считаются стандартом на подиуме, однако и они со временем теряют свою актуальность. К тому же, на протяжении истории человечества представления о «совершенной» женской фигуре неоднократно кардинально изменялись.",
    url: "/body-type-calculator",
    type: "website",
    images: [
      {
        url: "/images/body-type-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор типа фигуры онлайн | Calcoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор типа фигуры онлайн | Calcoffee",
    description:
      "Онлайн инструмент для определения типа женской фигуры. Узнайте, какой тип фигуры у вас, и получите рекомендации для гармоничного образа жизни.",
    images: ["/images/body-type-calculator-twitter.jpg"],
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
              name: "Калькулятор типа фигуры",
              url: "http://calcoffee.ru/body-type-calculator",
              description:
                "Онлайн инструмент для определения типа женской фигуры. Узнайте, какой тип фигуры у вас, и получите рекомендации для гармоничного образа жизни.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Определение типа женской фигуры",
                "Рекомендации по стилю",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/body-type-calculator-og.jpg",
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
                ratingValue: "4.4",
                reviewCount: "60",
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