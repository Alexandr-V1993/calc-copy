import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор нахождения 100% от числа",
  description:
    "Наш калькулятор помогает определить 100% от числа, если известно, что это число составляет определённый процент от общей суммы. Введите значение и процент для мгновенного расчета.",
  keywords: [
    "калькулятор 100 процентов",
    "нахождение 100 процентов",
    "расчет процентов",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/one-hundred-percent",
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
    title: "Калькулятор нахождения 100% от числа",
    description:
      "Наш калькулятор помогает определить 100% от числа, если известно, что это число составляет определённый процент от общей суммы. Введите значение и процент для мгновенного расчета.",
    url: "/one-hundred-percent",
    type: "website",
    images: [
      {
        url: "/images/one-hundred-percent-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор нахождения 100% от числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор нахождения 100% от числа",
    description:
      "Онлайн инструмент для расчета 100% от числа, если известен его процент от общей суммы. Просто введите данные для мгновенного результата.",
    images: ["/images/one-hundred-percent-twitter.jpg"],
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
              name: "Калькулятор нахождения 100% от числа",
              url: "http://calcoffee.ru/one-hundred-percent",
              description:
                "Онлайн инструмент для расчета 100% от числа, если известен его процент от общей суммы. Просто введите данные для мгновенного результата.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Нахождение 100% от числа",
                "Мгновенный расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/one-hundred-percent-og.jpg",
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
                ratingValue: "4.4",
                reviewCount: "55",
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