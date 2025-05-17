import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Алкокалькулятор | Расчет алкоголя в крови",
  description:
    "Онлайн калькулятор для водителей, позволяющий оценить содержание алкоголя в крови и выдыхаемом воздухе, а также прогнозировать время полного вывода алкоголя из организма.",
  keywords: [
    "алкокалькулятор для водителей",
    "расчет алкоголя в крови",
    "содержание алкоголя в крови",
    "калькулятор алкоголя",
    "прогноз времени вывода алкоголя",
  ],
  alternates: {
    canonical: "/bac-calculator",
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
    title: "Алкокалькулятор | Расчет алкоголя в крови",
    description:
      "Онлайн калькулятор для водителей, позволяющий оценить содержание алкоголя в крови и выдыхаемом воздухе, а также прогнозировать время полного вывода алкоголя из организма.",
    url: "/bac-calculator",
    type: "website",
    images: [
      {
        url: "/images/bac-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Алкокалькулятор | Расчет алкоголя в крови",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Алкокалькулятор | Расчет алкоголя в крови",
    description:
      "Онлайн инструмент для расчета содержания алкоголя в крови и прогнозирования времени его полного вывода из организма. Простой и удобный интерфейс.",
    images: ["/images/bac-calculator-twitter.jpg"],
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

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Алкокалькулятор",
              url: "http://calcoffee.ru/bac-calculator",
              description:
                "Онлайн инструмент для расчета содержания алкоголя в крови и прогнозирования времени его полного вывода из организма. Простой и удобный интерфейс.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет алкоголя в крови",
                "Прогноз времени вывода алкоголя",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/bac-calculator-og.jpg",
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
                ratingValue: "4.6",
                reviewCount: "85",
              },
            }),
          }}
          suppressHydrationWarning // Подавление предупреждений о гидратации
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}