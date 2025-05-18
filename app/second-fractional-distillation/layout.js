import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор перегонки спирта | Точный расчет дробной дистилляции",
  description:
    "Онлайн-инструмент для разделения фракций при вторичной перегонке спирта. Рассчитайте объем голов, тела и хвостов с учетом крепости и объема исходного продукта.",
  keywords: [
    "калькулятор перегонки спирта",
    "дробная дистилляция",
    "отделение голов и хвостов",
    "вторичная перегонка спирта",
    "расчет фракций спирта",
  ],
  alternates: {
    canonical: "/second-fractional-distillation",
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
    title: "Калькулятор дробной перегонки спирта онлайн | BoxCalculators",
    description:
      "Рассчитайте точное соотношение голов, тела и хвостов при повторной перегонке. Простой и понятный интерфейс для самогонщиков и виноделов.",
    url: "/second-fractional-distillation",
    type: "website",
    images: [
      {
        url: "/images/spirit-distillation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор дробной перегонки спирта онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор дробной перегонки спирта онлайн | BoxCalculators",
    description:
      "Определите объем голов, тела и хвостов при вторичной перегонке спирта. Быстро, точно и удобно для получения чистого алкоголя.",
    images: ["/images/spirit-distillation-twitter.jpg"],
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
              name: "Калькулятор дробной перегонки спирта",
              url: "https://boxcalculators.ru/second-fractional-distillation ",
              description:
                "Инструмент для расчёта фракций при второй перегонке спирта. Указывает объем голов, тела и хвостов на основе начальной крепости и желаемых параметров.",
              applicationCategory: "DistillationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт объема голов и хвостов",
                "Уточнение крепости тела после перегонки",
                "Мгновенный результат",
                "Простой интерфейс",
                "Таблицы поправок и советы по дистилляции",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/spirit-distillation-og.jpg ",
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
                ratingValue: "4.9",
                reviewCount: "170",
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
