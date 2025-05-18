import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title:
    "Металлокалькулятор онлайн | Точный расчет веса металлопроката по ГОСТ",
  description:
    "Профессиональный расчет веса всех видов металлопроката: трубы, листы, уголки, швеллеры. Мгновенные результаты по ГОСТ с учетом марки стали.",
  keywords: [
    "металлокалькулятор онлайн",
    "расчет веса металла",
    "калькулятор металлопроката",
    "вес стали по ГОСТ",
    "онлайн расчет металлоконструкций",
    "калькулятор веса труб",
    "расчет массы профиля",
    "металлический калькулятор",
    "вес арматуры",
    "расчет листового металла",
  ],
  alternates: {
    canonical: "/metallocalculator",
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
    title: "Онлайн металлокалькулятор для всех видов металлопроката",
    description:
      "Точный расчет веса труб, листов, профилей и других металлоизделий. Поддержка всех ГОСТ стандартов для точных результатов.",
    url: "/metallocalculator",
    type: "website",
    images: [
      {
        url: "/images/metallocalculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор веса металлопроката",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Полный металлокалькулятор онлайн",
    description:
      "Рассчитайте вес любого металлопроката за секунды. Точные результаты для труб, листов, профилей и других изделий.",
    images: ["/images/metallocalculator-twitter.jpg"],
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
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Металлокалькулятор онлайн",
              url: "https://boxcalculators.ru/metallocalculator",
              description:
                "Комплексный инструмент для расчета веса всех видов металлопроката с учетом ГОСТ стандартов.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет для всех видов металлопроката",
                "Поддержка актуальных ГОСТ",
                "Мгновенные результаты",
                "Точные вычисления массы",
                "Учет марки стали",
                "Расчет стоимости по весу",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metallocalculator-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru",
                },
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
