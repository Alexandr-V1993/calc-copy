import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор объема куба | Точный онлайн расчет",
  description:
    "Онлайн калькулятор для точного расчёта объема куба по длине его стороны. Простой и удобный инструмент для учебы, строительства и производства.",
  keywords: [
    "калькулятор объема куба",
    "расчет объема куба",
    "объем куба",
    "онлайн калькулятор",
    "геометрия",
    "инженерные расчеты",
  ],
  alternates: {
    canonical: "/cube-volume",
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
    title: "Калькулятор объема куба онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта объема куба по длине его стороны. Простой и удобный интерфейс для точных вычислений в любое время.",
    url: "/cube-volume",
    type: "website",
    images: [
      {
        url: "/images/cube-volume-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор объема куба онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор объема куба онлайн | BoxCalculators",
    description:
      "Простой онлайн-инструмент для расчёта объема куба. Введите длину стороны и получите мгновенный результат.",
    images: ["/images/cube-volume-calculator-twitter.jpg"],
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
              name: "Калькулятор объема куба",
              url: "https://boxcalculators.ru/cube-volume ",
              description:
                "Онлайн инструмент для расчёта объема куба по длине его стороны. Просто введите размер и получите точный результат за секунду.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема куба по длине стороны",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/cube-volume-calculator-og.jpg ",
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
                ratingValue: "4.6",
                reviewCount: "95",
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
