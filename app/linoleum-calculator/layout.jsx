import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор линолеума | Расчет количества и стоимости онлайн",
  description:
    "Онлайн калькулятор для точного расчёта необходимого количества линолеума и его стоимости с учетом площади помещения, ширины рулона и запаса на подрезку.",
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
    title: "Калькулятор линолеума онлайн | BoxCalculators",
    description:
      "Удобный инструмент для расчёта количества линолеума, необходимого для укладки в вашем помещении. Учитывайте ширину рулона, направление стыков и стоимость материала.",
    url: "/linoleum-calculator",
    type: "website",
    images: [
      {
        url: "/images/linoleum-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор линолеума онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор линолеума онлайн | BoxCalculators",
    description:
      "Рассчитайте необходимое количество линолеума для вашего помещения. Простой и понятный интерфейс для ремонта и отделки полов.",
    images: ["/images/linoleum-calculator-twitter.jpg"],
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
              name: "Калькулятор линолеума",
              url: "https://boxcalculators.ru/linoleum-calculator ",
              description:
                "Онлайн инструмент для расчёта количества линолеума и его стоимости. Учитывает все параметры укладки, ширину рулона и возможные отходы при монтаже.",
              applicationCategory: "HomeImprovementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади покрытия",
                "Учет ширины рулона линолеума",
                "Расчет стоимости материала",
                "Учет подрезки и отходов",
                "Выбор типа линолеума (бытовой, коммерческий)",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/linoleum-calculator-og.jpg ",
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
