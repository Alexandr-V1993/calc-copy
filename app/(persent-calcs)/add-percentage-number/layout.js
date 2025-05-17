import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор прибавления процентов к числу",
  description:
    "Узнайте, как изменится число после прибавления процента. Введите исходное число и процент, чтобы мгновенно увидеть результат расчета.",
  keywords: [
    "калькулятор процентов",
    "прибавление процентов",
    "расчет увеличения числа",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/add-percentage-number",
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
    title: "Калькулятор прибавления процентов к числу",
    description:
      "Узнайте, как изменится число после прибавления процента. Введите исходное число и процент, чтобы мгновенно увидеть результат расчета.",
    url: "/add-percentage-number",
    type: "website",
    images: [
      {
        url: "/images/add-percentage-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор прибавления процентов к числу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор прибавления процентов к числу",
    description:
      "Онлайн инструмент для расчета изменения числа после прибавления процента. Введите данные для мгновенного результата.",
    images: ["/images/add-percentage-number-twitter.jpg"],
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
              name: "Калькулятор прибавления процентов к числу",
              url: "http://calcoffee.ru/add-percentage-number",
              description:
                "Онлайн инструмент для расчета изменения числа после прибавления процента. Введите данные для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Прибавление процентов к числу",
                "Мгновенный расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/add-percentage-number-og.jpg",
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
                reviewCount: "75",
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