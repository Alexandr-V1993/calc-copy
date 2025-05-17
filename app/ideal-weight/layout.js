import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор идеального веса | расчет для (мужчин/женщин)",
  description:
    "Узнайте свой идеальный вес с помощью нашего калькулятора! Введите свой рост и получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
  keywords: [
    "калькулятор идеального веса",
    "расчет веса",
    "идеальный вес для мужчин",
    "идеальный вес для женщин",
    "здоровье",
    "правильный вес",
  ],
  alternates: {
    canonical: "/ideal-weight",
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
    title: "Калькулятор идеального веса | расчет для (мужчин/женщин)",
    description:
      "Узнайте свой идеальный вес с помощью нашего калькулятора! Введите свой рост и получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
    url: "/ideal-weight",
    type: "website",
    images: [
      {
        url: "/images/ideal-weight-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор идеального веса | расчет для (мужчин/женщин)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор идеального веса | расчет для (мужчин/женщин)",
    description:
      "Онлайн инструмент для расчета идеального веса на основе роста. Получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
    images: ["/images/ideal-weight-twitter.jpg"],
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
              name: "Калькулятор идеального веса",
              url: "http://calcoffee.ru/ideal-weight",
              description:
                "Онлайн инструмент для расчета идеального веса на основе роста. Получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет идеального веса",
                "Поддержка мужчин и женщин",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/ideal-weight-og.jpg",
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
                reviewCount: "110",
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