import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор объема цилиндра | Онлайн расчет",
  description:
    "Быстрый и удобный калькулятор для расчёта объема цилиндра по радиусу и высоте. Подходит для студентов, инженеров и всех, кто работает с геометрическими формами.",
  keywords: [
    "калькулятор объема цилиндра",
    "объем цилиндра",
    "расчет объема цилиндра",
    "онлайн калькулятор",
    "инженерные расчеты",
  ],
  alternates: {
    canonical: "/cylinder-volume",
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
    title: "Калькулятор объема цилиндра онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта объема цилиндра по радиусу и высоте. Простой и быстрый способ получить точный результат без формул и ручных вычислений.",
    url: "/cylinder-volume",
    type: "website",
    images: [
      {
        url: "/images/cylinder-volume-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор объема цилиндра онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор объема цилиндра онлайн | BoxCalculators",
    description:
      "Удобный онлайн-инструмент для расчёта объема цилиндра. Введите радиус и высоту и получите мгновенный результат.",
    images: ["/images/cylinder-volume-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор объема цилиндра",
              url: "https://boxcalculators.ru/cylinder-volume ",
              description:
                "Онлайн инструмент для расчёта объема цилиндра по радиусу и высоте. Просто введите данные и получите точный результат за секунду.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема цилиндра по радиусу и высоте",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/cylinder-volume-calculator-og.jpg ",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock ",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru ",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "105",
              },
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
