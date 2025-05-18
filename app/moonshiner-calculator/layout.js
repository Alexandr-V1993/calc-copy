import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор смешивания спиртов | Рассчитайте крепость после смешения",
  description:
    "Онлайн-калькулятор для точного определения крепости алкоголя после смешивания двух растворов с разной концентрацией. Узнайте, какой градус получится в результате без формул и расчетов.",
  keywords: [
    "калькулятор смешивания спиртов",
    "расчет крепости после смешивания",
    "смешивание алкоголя",
    "домашнее самогоноварение",
    "спиртовой калькулятор",
    "онлайн калькулятор алкоголя",
  ],
  alternates: {
    canonical: "/moonshiner-calculator",
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
    title: "Калькулятор смешивания спиртов онлайн | BoxCalculators",
    description:
      "Узнайте крепость вашего алкогольного напитка после смешивания. Простой инструмент для самогонщиков и любителей домашних напитков.",
    url: "/moonshiner-calculator",
    type: "website",
    images: [
      {
        url: "/images/moonshiner-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор смешивания спиртов онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор смешивания спиртов онлайн | BoxCalculators",
    description:
      "Рассчитайте крепость алкоголя после смешивания двух разных по концентрации растворов. Быстро, точно и удобно для самогонщиков и виноделов.",
    images: ["/images/moonshiner-calculator-twitter.jpg"],
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
              name: "Калькулятор смешивания спиртов",
              url: "https://boxcalculators.ru/moonshiner-calculator ",
              description:
                "Инструмент для расчёта крепости после смешивания двух спиртовых растворов. Позволяет избежать ошибок при создании домашних напитков.",
              applicationCategory: "AlcoholManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт крепости после смешивания",
                "Поддержка разных объемов и концентраций",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/moonshiner-calculator-og.jpg ",
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
                reviewCount: "90",
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
