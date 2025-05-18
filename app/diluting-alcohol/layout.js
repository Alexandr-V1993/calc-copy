import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор разбавления спирта водой | Точный расчет пропорций",
  description:
    "Онлайн-калькулятор для точного разбавления спирта водой до нужной крепости. Удобный инструмент для самогоноварения, виноделия и приготовления настоек.",
  keywords: [
    "калькулятор разбавления спирта",
    "содержание алкоголя",
    "расчет крепости напитка",
    "разбавление спирта водой",
    "онлайн калькулятор алкоголя",
  ],
  alternates: {
    canonical: "/diluting-alcohol",
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
    title: "Калькулятор разбавления спирта водой онлайн | BoxCalculators",
    description:
      "Узнайте, сколько воды нужно добавить в спирт, чтобы достичь нужной крепости. Простой и понятный инструмент для домашнего производства алкоголя.",
    url: "/diluting-alcohol",
    type: "website",
    images: [
      {
        url: "/images/diluting-alcohol-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор разбавления спирта водой онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор разбавления спирта водой онлайн | BoxCalculators",
    description:
      "Рассчитайте точное количество воды, необходимое для разбавления спирта до нужной крепости. Подходит для самогонщиков, виноделов и любителей домашних напитков.",
    images: ["/images/diluting-alcohol-twitter.jpg"],
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
              name: "Калькулятор разбавления спирта водой",
              url: "https://boxcalculators.ru/diluting-alcohol ",
              description:
                "Инструмент для расчёта количества воды, которую нужно добавить в спирт, чтобы получить напиток нужной крепости. Работает по простому принципу и мгновенно выдает результат.",
              applicationCategory: "AlcoholManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт разбавления спирта",
                "Мгновенный результат",
                "Простой интерфейс",
                "Точные пропорции",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/diluting-alcohol-og.jpg ",
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
                ratingValue: "4.5",
                reviewCount: "80",
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
