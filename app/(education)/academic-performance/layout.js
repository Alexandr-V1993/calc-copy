import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор СОУ онлайн | Расчет успеваемости и качества знаний",
  description:
    "Рассчитайте степень обученности (СОУ), качество знаний (КЗ), успеваемость и средний балл за считанные секунды. Бесплатный инструмент для учителей, родителей и школьников.",
  keywords: [
    "калькулятор СОУ",
    "расчет степени обученности",
    "качества знаний",
    "успеваемость учащихся",
    "средний балл по формуле",
    "инструмент для учителя",
    "образовательный калькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/academic-performance",
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
    title: "Калькулятор СОУ | BoxCalculators",
    description:
      "Онлайн инструмент расчета степени обученности (СОУ), качества знаний (КЗ) и успеваемости учащихся. Простой и точный калькулятор для образовательных задач.",
    url: "/academic-performance",
    type: "website",
    images: [
      {
        url: "/images/sou-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор СОУ от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор СОУ | BoxCalculators",
    description:
      "Инструмент для расчёта показателей успеваемости, СОУ и качества знаний. Подходит учителям, родителям и школьникам для анализа учебного процесса.",
    images: ["/images/sou-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://boxcalculators.ru/academic-performance "
        />

        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор СОУ",
              url: "https://boxcalculators.ru/academic-performance ",
              description:
                "Онлайн инструмент для расчета степени обученности (СОУ), качества знаний (КЗ), успеваемости и среднего балла. Помогает учителям и родителям анализировать учебные результаты учащихся.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт степени обученности (СОУ)",
                "Анализ качества знаний (КЗ)",
                "Определение уровня успеваемости",
                "Мгновенный результат",
                "Простой интерфейс для преподавателей",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/sou-calculator-og.jpg ",
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
                reviewCount: "85",
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
