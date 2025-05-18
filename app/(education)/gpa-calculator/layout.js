import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор среднего балла | Онлайн расчет успеваемости",
  description:
    "Рассчитайте средний балл зачета, успеваемости или GPA за секунды. Подходит для школьников, студентов и преподавателей. Простой и удобный инструмент.",
  keywords: [
    "калькулятор среднего балла",
    "расчет успеваемости онлайн",
    "оценка успеваемости",
    "GPA калькулятор",
    "средний балл по оценкам",
    "онлайн калькулятор оценок",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/gpa-calculator",
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
    title: "Калькулятор среднего балла | BoxCalculators",
    description:
      "Онлайн инструмент для расчёта средней оценки, GPA и других показателей успеваемости. Бесплатный и точный калькулятор для учеников, студентов и педагогов.",
    url: "/gpa-calculator",
    type: "website",
    images: [
      {
        url: "/images/gpa-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор среднего балла от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор среднего балла | BoxCalculators",
    description:
      "Рассчитывайте успеваемость быстро и точно. Инструмент для школьников, студентов и преподавателей. Простой интерфейс и мгновенный результат.",
    images: ["/images/gpa-calculator-twitter.jpg"],
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
          href="https://boxcalculators.ru/gpa-calculator "
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
              name: "Калькулятор среднего балла",
              url: "https://boxcalculators.ru/gpa-calculator ",
              description:
                "Онлайн инструмент для расчёта среднего балла, успеваемости и рекомендаций по оценкам. Помогает определить успеваемость ученика или студента.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт среднего балла",
                "Поддержка российской и международной систем оценок",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/gpa-calculator-og.jpg ",
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
                ratingValue: "4.8",
                reviewCount: "95",
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
