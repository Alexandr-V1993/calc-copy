import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса арматуры | Точный расчет по ГОСТ",
  description:
    "Онлайн-инструмент для расчёта массы арматурных стержней по длине и диаметру. Получите точные данные, соответствующие российским стандартам.",
  keywords: [
    "калькулятор веса арматуры",
    "расчет веса арматуры",
    "вес арматурного стержня",
    "ГОСТ на арматуру",
    "металлический калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-armature",
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
    title: "Калькулятор веса арматуры онлайн | BoxCalculators",
    description:
      "Рассчитайте вес арматуры любого диаметра и длины в соответствии с ГОСТ. Простой инструмент для строителей, инженеров и частных мастеров.",
    url: "/metal-calculator-armature",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-armature-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса арматуры онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса арматуры онлайн | BoxCalculators",
    description:
      "Узнайте массу арматуры за секунды. Онлайн-расчёт по длине и диаметру, с учетом ГОСТ.",
    images: ["/images/metal-calculator-armature-twitter.jpg"],
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
              name: "Калькулятор веса арматуры",
              url: "https://boxcalculators.ru/metal-calculator-armature ",
              description:
                "Инструмент для расчёта массы арматурных стержней по длине и диаметру. Подходит для планирования строительства и закупки материалов.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт массы по длине и диаметру",
                "Соответствие ГОСТ",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-armature-og.jpg ",
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
