import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор идеального веса | Расчёт для мужчин и женщин",
  description:
    "Узнайте свой идеальный вес с помощью онлайн-калькулятора! Введите рост, пол и возраст, чтобы определить оптимальный вес для здоровья и самочувствия.",
  keywords: [
    "калькулятор идеального веса",
    "расчет веса",
    "идеальный вес для мужчин",
    "идеальный вес для женщин",
    "здоровый вес",
    "индекс массы тела",
  ],
  alternates: {
    canonical: "/healthy-weight",
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
    title: "Калькулятор идеального веса | BoxCalculators",
    description:
      "Онлайн калькулятор для расчёта идеального веса на основе роста, возраста и пола. Удобный инструмент для контроля за здоровьем и уровнем физической формы.",
    url: "/healthy-weight",
    type: "website",
    images: [
      {
        url: "/images/ideal-weight-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор идеального веса | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор идеального веса | BoxCalculators",
    description:
      "Онлайн инструмент для расчета идеального веса на основе роста, пола и возраста. Получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
    images: ["/images/ideal-weight-twitter.jpg"],
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
              name: "Калькулятор идеального веса",
              url: "https://boxcalculators.ru/healthy-weight ",
              description:
                "Онлайн инструмент для расчета идеального веса на основе роста, пола и возраста. Получите оптимальный вес для поддержания здоровья и хорошего самочувствия.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет идеального веса",
                "Поддержка мужчин и женщин",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/ideal-weight-og.jpg ",
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
                reviewCount: "110",
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
