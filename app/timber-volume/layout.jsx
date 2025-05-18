import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Онлайн калькулятор расчета бруса | Точный расчет",
  description:
    "Точный онлайн калькулятор расчета объема, площади и количества бруса в кубических метрах. Удобный инструмент для строительства и планирования.",
  keywords: [
    "калькулятор бруса",
    "расчет объема бруса",
    "количество бруса",
    "объем бруса",
    "онлайн калькулятор",
    "строительные материалы",
  ],
  alternates: {
    canonical: "/timber-calculator",
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
    title:
      "Онлайн калькулятор расчета бруса - Точный расчет объема и количества",
    description:
      "Онлайн инструмент для точного расчета объема, площади и количества бруса. Удобное решение для строительства и планирования.",
    url: "/timber-calculator",
    type: "website",
    images: [
      {
        url: "/images/timber-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расчета бруса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расчета бруса - Точный расчет объема и количества",
    description:
      "Онлайн инструмент для точного расчета объема, площади и количества бруса.",
    images: ["/images/timber-calculator-twitter.jpg"],
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
              name: "Калькулятор расчета бруса",
              url: "https://boxcalculators.ru/timber-calculator ",
              description:
                "Онлайн инструмент для точного расчета объема, площади и количества бруса.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема бруса",
                "Расчет площади покрытия",
                "Определение количества бруса",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/timber-calculator-og.jpg ",
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
