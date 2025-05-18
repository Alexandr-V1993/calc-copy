import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор ковролина | Расчет количества и стоимости онлайн",
  description:
    "Онлайн калькулятор для точного расчета количества ковролина, необходимого для укладки в вашей комнате. Учитывайте ширину рулона, площадь помещения и запас на подрезку.",
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
    title: "Калькулятор ковролина онлайн | BoxCalculators",
    description:
      "Удобный инструмент для расчёта количества ковролина с учетом площади помещения, ширины рулона и направления ворса. Получите точное количество и стоимость за секунды.",
    url: "/carpet-calculator",
    type: "website",
    images: [
      {
        url: "/images/carpet-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор ковролина онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор ковролина онлайн | BoxCalculators",
    description:
      "Рассчитайте необходимое количество ковролина для вашего помещения. Простой и понятный интерфейс для ремонта и отделки полов.",
    images: ["/images/carpet-calculator-twitter.jpg"],
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
              name: "Калькулятор ковролина",
              url: "https://boxcalculators.ru/carpet-calculator ",
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
              image:
                "https://boxcalculators.ru/images/carpet-calculator-og.jpg ",
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
