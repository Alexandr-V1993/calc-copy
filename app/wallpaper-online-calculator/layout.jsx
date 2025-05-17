import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор обоев | Точный расчет",
  description:
    "Онлайн калькулятор для точного расчета количества обоев, необходимых для вашего ремонта. Простое и удобное решение для планирования ваших отделочных работ.",
  keywords: [
    "калькулятор обоев",
    "расчет количества обоев",
    "онлайн калькулятор обоев",
    "ремонт",
    "планирование отделочных работ",
  ],
  alternates: {
    canonical: "/wallpaper-online-calculator",
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
    title: "Калькулятор обоев: точный расчет количества обоев онлайн",
    description:
      "Онлайн калькулятор для точного расчета количества обоев, необходимых для вашего ремонта. Простое и удобное решение для планирования ваших отделочных работ.",
    url: "/wallpaper-online-calculator",
    type: "website",
    images: [
      {
        url: "/images/wallpaper-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор обоев: точный расчет количества обоев онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор обоев: точный расчет количества обоев онлайн",
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
              name: "Калькулятор обоев",
              url: "http://calcoffee.ru/wallpaper-online-calculator",
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
              image: "http://calcoffee.ru/images/wallpaper-calculator-og.jpg",
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
                reviewCount: "160",
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