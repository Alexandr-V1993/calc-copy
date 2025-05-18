import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
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
    canonical: "/body-type",
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
    title: "Калькулятор типа фигуры онлайн | BoxCalculators",
    description:
      "Каждая женщина стремится верить в то, что её фигура безупречна, но существует ли в реальности такой идеал? Известные модельные параметры 90x60x90 часто считаются стандартом на подиуме, однако и они со временем теряют свою актуальность.",
    url: "/body-type",
    type: "website",
    images: [
      {
        url: "/images/body-type-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор типа фигуры онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор типа фигуры онлайн | BoxCalculators",
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
              name: "Калькулятор типа фигуры",
              url: "https://boxcalculators.ru/body-type ",
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
              image:
                "https://boxcalculators.ru/images/body-type-calculator-og.jpg ",
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
                ratingValue: "4.4",
                reviewCount: "60",
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
