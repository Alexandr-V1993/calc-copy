import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор обоев | Точный расчет количества рулонов онлайн",
  description:
    "Онлайн калькулятор для точного расчёта необходимого количества обоев с учетом площади стен, размеров рулонов и особенностей узора. Удобное планирование ремонта без перерасхода материалов.",
  keywords: [
    "калькулятор обоев",
    "расчет количества обоев",
    "онлайн калькулятор обоев",
    "ремонт",
    "планирование отделочных работ",
  ],
  alternates: {
    canonical: "/wallpaper-calculator",
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
    title: "Калькулятор обоев: точный расчет количества рулонов онлайн",
    description:
      "Онлайн калькулятор для точного расчёта необходимого количества обоев. Удобное решение для планирования отделки и ремонта в квартире или доме.",
    url: "/wallpaper-calculator",
    type: "website",
    images: [
      {
        url: "/images/wallpaper-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор обоев: точный расчет количества рулонов онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор обоев: точный расчет количества рулонов онлайн",
    description:
      "Онлайн инструмент для точного расчета количества обоев. Удобное решение для планирования отделочных работ и ремонта.",
    images: ["/images/wallpaper-calculator-twitter.jpg"],
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
              name: "Калькулятор обоев",
              url: "https://boxcalculators.ru/wallpaper-calculator ",
              description:
                "Онлайн инструмент для точного расчета количества обоев. Удобное решение для планирования отделочных работ и ремонта.",
              applicationCategory: "HomeApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет количества рулонов обоев",
                "Учет площади стен",
                "Поддержка различных размеров рулонов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/wallpaper-calculator-og.jpg ",
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
                reviewCount: "160",
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
