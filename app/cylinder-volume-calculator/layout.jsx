import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор объема цилиндра | Онлайн расчет",
  description:
    "Быстрый и удобный калькулятор для расчета объема цилиндра. Введите радиус и высоту, чтобы мгновенно получить результат. Подходит для студентов, инженеров и любителей математики.",
  keywords: [
    "калькулятор объема цилиндра",
    "объем цилиндра",
    "расчет объема цилиндра",
    "онлайн калькулятор",
    "инженерные расчеты",
  ],
  alternates: {
    canonical: "/cylinder-volume-calculator",
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
    title: "Калькулятор объема цилиндра | Онлайн расчет",
    description:
      "Быстрый и удобный калькулятор для расчета объема цилиндра. Введите радиус и высоту, чтобы мгновенно получить результат. Подходит для студентов, инженеров и любителей математики.",
    url: "/cylinder-volume-calculator",
    type: "website",
    images: [
      {
        url: "/images/cylinder-volume-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор объема цилиндра | Онлайн расчет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор объема цилиндра | Онлайн расчет",
    description:
      "Онлайн инструмент для расчета объема цилиндра. Просто введите радиус и высоту, чтобы получить точный результат. Идеально подходит для учебы, работы и хобби.",
    images: ["/images/cylinder-volume-calculator-twitter.jpg"],
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
              name: "Калькулятор объема цилиндра",
              url: "http://calcoffee.ru/cylinder-volume-calculator",
              description:
                "Онлайн инструмент для расчета объема цилиндра. Просто введите радиус и высоту, чтобы получить точный результат. Идеально подходит для учебы, работы и хобби.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема цилиндра по радиусу и высоте",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/cylinder-volume-calculator-og.jpg",
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