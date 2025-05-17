import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор линолеума | Расчет количества и стоимости",
  description:
    "Рассчитайте необходимое количество линолеума и его стоимость онлайн. Учитывайте площадь помещения, ширину рулона и подрезку. Идеальный инструмент для ремонта и отделки помещений!",
  keywords: [
    "калькулятор линолеума",
    "расчет линолеума",
    "сколько нужно линолеума",
    "стоимость линолеума",
    "онлайн расчет покрытия",
    "ремонт полов",
    "укладка линолеума",
    "пвх покрытие",
  ],
  alternates: {
    canonical: "/linoleum-calculator",
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
    title: "Калькулятор линолеума - Точный расчет количества и стоимости",
    description:
      "Профессиональный расчет необходимого количества линолеума с учетом всех параметров. Узнайте точную стоимость покрытия перед покупкой!",
    url: "/linoleum-calculator",
    type: "website",
    images: [
      {
        url: "/images/linoleum-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор линолеума - Профессиональный расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор линолеума - Точный расчет количества и стоимости",
    description:
      "Рассчитайте сколько нужно линолеума для вашего помещения с учетом всех особенностей укладки. Быстро, точно, удобно!",
    images: ["/images/linoleum-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="CalCoffee" />
        <meta name="author" content="CalCoffee" />
        <meta name="copyright" content="CalCoffee" />
        <meta name="rating" content="general" />

        {/* Структурированные данные для калькулятора линолеума */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор линолеума",
              url: "http://calcoffee.ru/linoleum-calculator",
              description:
                "Онлайн инструмент для расчета необходимого количества линолеума и его стоимости с учетом всех параметров укладки.",
              applicationCategory: "HomeImprovementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади покрытия",
                "Учет ширины рулона линолеума",
                "Расчет стоимости материала",
                "Учет подрезки и отходов",
                "Выбор типа линолеума (ПВХ, натуральный)",
                "Простой интуитивный интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/linoleum-calculator-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "CalCoffee",
                  url: "http://calcoffee.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "124",
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
