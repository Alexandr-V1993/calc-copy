import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор площади комнаты | Точный расчет в квадратных метрах",
  description:
    "Онлайн-калькулятор для точного расчёта площади помещения в квадратных метрах. Просто введите длину и ширину комнаты, чтобы получить результат за считанные секунды.",
  keywords: [
    "калькулятор площади комнаты",
    "расчет площади комнаты",
    "онлайн калькулятор площади",
    "квадратные метры",
    "измерение площади комнаты",
  ],
  alternates: {
    canonical: "/room-area",
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
    title: "Калькулятор площади комнаты онлайн | BoxCalculators",
    description:
      "Онлайн-калькулятор для точного расчёта площади помещения в квадратных метрах. Простой и удобный инструмент для ремонта и дизайна интерьера.",
    url: "/room-area",
    type: "website",
    images: [
      {
        url: "/images/calculator-room-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади комнаты онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади комнаты онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для точного расчета площади комнаты в квадратных метрах. Просто введите длину и ширину, чтобы получить результат.",
    images: ["/images/calculator-room-area-twitter.jpg"],
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
              name: "Калькулятор площади комнаты",
              url: "https://boxcalculators.ru/room-area ",
              description:
                "Онлайн инструмент для точного расчета площади комнаты в квадратных метрах. Просто введите длину и ширину, чтобы получить результат.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади комнаты",
                "Поддержка квадратных метров",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/calculator-room-area-og.jpg ",
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
                reviewCount: "100",
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
