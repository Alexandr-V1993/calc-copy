import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор площади треугольника | Расчет",
  description:
    "Калькулятор для точного расчета площади треугольника. Введите длины сторон или параметры основания и высоты, чтобы получить мгновенные результаты. Подходит для учебы и практических задач.",
  keywords: [
    "калькулятор площади треугольника",
    "расчет площади треугольника",
    "онлайн калькулятор треугольника",
    "площадь треугольника",
    "вычисление площади треугольника",
  ],
  alternates: {
    canonical: "/triangle-area-calculator",
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
    title: "Калькулятор площади треугольника | Расчет",
    description:
      "Калькулятор для точного расчета площади треугольника. Введите длины сторон или параметры основания и высоты, чтобы получить мгновенные результаты. Подходит для учебы и практических задач.",
    url: "/triangle-area-calculator",
    type: "website",
    images: [
      {
        url: "/images/triangle-area-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади треугольника | Расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади треугольника | Расчет",
    description:
      "Онлайн инструмент для точного расчета площади треугольника. Удобный и быстрый способ получить результаты для учебы и практических задач.",
    images: ["/images/triangle-area-calculator-twitter.jpg"],
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
              name: "Калькулятор площади треугольника",
              url: "http://calcoffee.ru/triangle-area-calculator",
              description:
                "Онлайн инструмент для точного расчета площади треугольника. Удобный и быстрый способ получить результаты для учебы и практических задач.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет площади по сторонам",
                "Расчет площади по основанию и высоте",
                "Мгновенный результат",
                "Простой интерфейс",
                "Поддержка различных типов треугольников",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/triangle-area-calculator-og.jpg",
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
                ratingValue: "4.9",
                reviewCount: "180",
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