import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор расчета ткани | Расчет онлайн",
  description:
    "Онлайн калькулятор для точного расчета количества ткани при пошиве одежды, постельного белья, штор и других изделий. Удобный инструмент для начинающих и опытных мастеров.",
  keywords: [
    "калькулятор ткани",
    "расчет ткани",
    "онлайн калькулятор ткани",
    "пошив одежды",
    "расчет ткани для постельного белья",
  ],
  alternates: {
    canonical: "/fabric-calculator",
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
    title: "Калькулятор расчета ткани | BoxCalculators",
    description:
      "Онлайн калькулятор для точного расчета количества ткани при пошиве одежды, постельного белья и других текстильных изделий.",
    url: "/fabric-calculator",
    type: "website",
    images: [
      {
        url: "/images/fabric-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расчета ткани | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расчета ткани | BoxCalculators",
    description:
      "Удобный онлайн-инструмент для расчёта необходимого количества ткани. Подходит для пошива одежды, постельного белья, штор и других проектов.",
    images: ["/images/fabric-calculator-twitter.jpg"],
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
              name: "Калькулятор расчета ткани",
              url: "https://boxcalculators.ru/fabric-calculator ",
              description:
                "Удобный онлайн-инструмент для расчёта необходимого количества ткани. Подходит для пошива одежды, постельного белья, штор и других проектов.",
              applicationCategory: "TextileApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет количества ткани",
                "Оценка стоимости материалов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/fabric-calculator-og.jpg ",
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
                ratingValue: "4.7",
                reviewCount: "105",
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
