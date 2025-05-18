import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор суточного потребления воды | Точный расчет нормы",
  description:
    "Онлайн калькулятор для расчёта рекомендуемого суточного потребления воды. Узнайте, сколько воды вам нужно пить каждый день для здоровья.",
  keywords: [
    "калькулятор воды",
    "суточное потребление воды",
    "расчет воды в день",
    "сколько пить воды",
    "водный баланс",
    "здоровье",
  ],
  alternates: {
    canonical: "/water-balance",
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
    title: "Калькулятор суточного потребления воды онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для точного расчёта суточной нормы воды с учетом веса, пола и уровня активности. Простой и удобный интерфейс для поддержания водного баланса.",
    url: "/water-balance",
    type: "website",
    images: [
      {
        url: "/images/water-intake-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор суточного потребления воды онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор суточного потребления воды онлайн | BoxCalculators",
    description:
      "Простой онлайн-инструмент для расчёта количества воды, необходимой вам ежедневно. Подходит для мужчин и женщин разного возраста и образа жизни.",
    images: ["/images/water-intake-calculator-twitter.jpg"],
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
              name: "Калькулятор суточного потребления воды",
              url: "https://boxcalculators.ru/water-balance ",
              description:
                "Онлайн инструмент для расчёта количества воды, необходимой вам ежедневно. Подходит для мужчин и женщин разного возраста и образа жизни.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет суточной нормы воды",
                "Учет веса и физической активности",
                "Мгновенный результат",
                "Простой интерфейс",
                "Советы по здоровому образу жизни",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/water-intake-calculator-og.jpg ",
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
                ratingValue: "4.9",
                reviewCount: "220",
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
