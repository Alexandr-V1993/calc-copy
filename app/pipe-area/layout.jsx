import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор площади поверхности трубы | Точный расчет онлайн",
  description:
    "Простой и точный калькулятор для расчета площади поверхности трубы. Введите размеры, чтобы мгновенно получить результат. Подходит для инженеров, строителей и студентов.",
  keywords: [
    "калькулятор площади трубы",
    "расчет площади поверхности трубы",
    "онлайн калькулятор трубы",
    "площадь трубы",
    "инженерные расчеты",
  ],
  alternates: {
    canonical: "/pipe-surface-area-calculator",
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
    title: "Калькулятор площади поверхности трубы | Точный расчет онлайн",
    description:
      "Простой и точный калькулятор для расчета площади поверхности трубы. Введите размеры, чтобы мгновенно получить результат. Подходит для инженеров, строителей и студентов.",
    url: "/pipe-surface-area-calculator",
    type: "website",
    images: [
      {
        url: "/images/pipe-surface-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади поверхности трубы | Точный расчет онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади поверхности трубы | Точный расчет онлайн",
    description:
      "Онлайн инструмент для расчета площади поверхности трубы. Простой интерфейс и точные результаты для инженеров, строителей и студентов.",
    images: ["/images/pipe-surface-area-twitter.jpg"],
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
              name: "Калькулятор площади поверхности трубы",
              url: "http://calcoffee.ru/pipe-surface-area-calculator",
              description:
                "Онлайн инструмент для расчета площади поверхности трубы. Простой интерфейс и точные результаты для инженеров, строителей и студентов.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади поверхности трубы",
                "Поддержка разных размеров",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/pipe-surface-area-og.jpg",
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
                ratingValue: "4.7",
                reviewCount: "105",
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