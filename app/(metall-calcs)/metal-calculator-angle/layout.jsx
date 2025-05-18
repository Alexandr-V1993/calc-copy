import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса металлических уголков | Точный расчет массы",
  description:
    "Онлайн-инструмент для расчёта массы погонного метра равнополочных и неравнополочных металлических уголков. Популярные сортаменты, таблицы и быстрый результат.",
  keywords: [
    "калькулятор веса уголков",
    "расчет массы уголков",
    "таблицы веса металлопроката",
    "размеры стальных уголков",
    "металлокалькулятор онлайн",
  ],
  alternates: {
    canonical: "/metal-calculator-angle",
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
    title: "Калькулятор веса металлических уголков онлайн | BoxCalculators",
    description:
      "Рассчитайте массу погонного метра уголков за секунды. Поддерживает равнополочные и неравнополочные профили. Удобный инструмент для строителей и инженеров.",
    url: "/metal-calculator-angle",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-angle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса металлических уголков онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса металлических уголков онлайн | BoxCalculators",
    description:
      "Определите массу уголка по его размерам и типу стали. Подходит для проектов, закупок и транспортировки.",
    images: ["/images/metal-calculator-angle-twitter.jpg"],
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
              name: "Калькулятор веса металлических уголков",
              url: "https://boxcalculators.ru/metal-calculator-angle ",
              description:
                "Инструмент для расчёта массы погонного метра стальных уголков. Работает с равнополочными и неравнополочными профилями стандартных размеров.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт массы уголков",
                "Таблицы популярных сортаментов",
                "Мгновенный результат",
                "Поддержка разных типов стали",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-angle-og.jpg ",
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
                reviewCount: "65",
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
