import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор расчета ткани | Расчет онлайн",
  description:
    "Онлайн калькулятор для расчета ткани и для пошива постельного белья и одежды. Этот инструмент поможет точно определить необходимое количество ткани и рассчитать стоимость, а также предложит оптимальные материалы для вашего проекта.",
  keywords: [
    "калькулятор ткани",
    "расчет ткани",
    "онлайн калькулятор ткани",
    "пошив одежды",
    "расчет ткани для постельного белья",
  ],
  alternates: {
    canonical: "/fabric-online-calculator",
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
    title: "Калькулятор расчета ткани | Calcoffee ✔️",
    description:
      "Онлайн калькулятор для расчета ткани и для пошива постельного белья и одежды. Этот инструмент поможет точно определить необходимое количество ткани и рассчитать стоимость, а также предложит оптимальные материалы для вашего проекта.",
    url: "/fabric-online-calculator",
    type: "website",
    images: [
      {
        url: "/images/fabric-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расчета ткани | Calcoffee ✔️",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расчета ткани | Calcoffee ✔️",
    description:
      "Онлайн инструмент для точного расчета количества ткани для пошива одежды и постельного белья. Простой и удобный интерфейс для планирования проектов.",
    images: ["/images/fabric-calculator-twitter.jpg"],
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
              name: "Калькулятор расчета ткани",
              url: "http://calcoffee.ru/fabric-online-calculator",
              description:
                "Онлайн инструмент для точного расчета количества ткани для пошива одежды и постельного белья. Простой и удобный интерфейс для планирования проектов.",
              applicationCategory: "TextileApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет количества ткани",
                "Оценка стоимости материалов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/fabric-calculator-og.jpg",
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