import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор ковролина | Расчет количества и стоимости",
  description:
    "Рассчитайте необходимое количество ковролина и его стоимость онлайн. Учитывайте площадь помещения, ширину рулона и подрезку. Идеальный инструмент для ремонта и отделки помещений!",
  keywords: [
    "калькулятор ковролина",
    "расчет ковролина",
    "сколько нужно ковролина",
    "стоимость ковролина",
    "онлайн расчет покрытия",
    "ремонт полов",
  ],
  alternates: {
    canonical: "/carpet-calculator",
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
    title: "Калькулятор ковролина - Точный расчет количества и стоимости",
    description:
      "Профессиональный расчет необходимого количества ковролина с учетом всех параметров. Узнайте точную стоимость покрытия перед покупкой!",
    url: "/carpet-calculator",
    type: "website",
    images: [
      {
        url: "/images/carpet-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор ковролина - Профессиональный расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор ковролина - Точный расчет количества и стоимости",
    description:
      "Рассчитайте сколько нужно ковролина для вашего помещения с учетом всех особенностей укладки. Быстро, точно, удобно!",
    images: ["/images/carpet-calculator-twitter.jpg"],
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

        {/* Структурированные данные для калькулятора ковролина */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор ковролина",
              url: "http://calcoffee.ru/carpet-calculator",
              description:
                "Онлайн инструмент для расчета необходимого количества ковролина и его стоимости с учетом всех параметров укладки.",
              applicationCategory: "HomeImprovementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади покрытия",
                "Учет ширины рулона ковролина",
                "Расчет стоимости материала",
                "Учет подрезки и отходов",
                "Простой интуитивный интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/carpet-calculator-og.jpg",
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
