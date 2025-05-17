import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор расчета процента от числа",
  description:
    "Легко вычислите процент от числа с нашим калькулятором. Введите число и процент, чтобы мгновенно получить результат расчета.",
  keywords: [
    "калькулятор процента от числа",
    "расчет процента",
    "вычисление процента",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/percentage-of-number",
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
    title: "Калькулятор расчета процента от числа",
    description:
      "Легко вычислите процент от числа с нашим калькулятором. Введите число и процент, чтобы мгновенно получить результат расчета.",
    url: "/percentage-of-number",
    type: "website",
    images: [
      {
        url: "/images/percentage-of-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор расчета процента от числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор расчета процента от числа",
    description:
      "Онлайн инструмент для быстрого расчета процента от числа. Просто введите данные для мгновенного результата.",
    images: ["/images/percentage-of-number-twitter.jpg"],
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
              name: "Калькулятор расчета процента от числа",
              url: "http://calcoffee.ru/percentage-of-number",
              description:
                "Онлайн инструмент для быстрого расчета процента от числа. Просто введите данные для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процента от числа",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/percentage-of-number-og.jpg",
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
                ratingValue: "4.3",
                reviewCount: "50",
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