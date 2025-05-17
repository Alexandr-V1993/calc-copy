import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор СОУ: расчет успеваемости и качества знаний",
  description:
    "Онлайн калькулятор СОУ для расчета успеваемости, качества знаний и среднего балла. Идеально подходит для учителей и преподавателей, чтобы оценить уровень обучения.",
  keywords: [
    "калькулятор СОУ",
    "расчет успеваемости",
    "качество знаний",
    "средний балл",
    "инструмент для учителей",
    "оценка уровня обучения",
  ],
  alternates: {
    canonical: "/sou-calculator",
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
    title: "Калькулятор СОУ: расчет успеваемости и качества знаний",
    description:
      "Онлайн калькулятор СОУ для расчета успеваемости, качества знаний и среднего балла. Идеально подходит для учителей и преподавателей, чтобы оценить уровень обучения.",
    url: "/sou-calculator",
    type: "website",
    images: [
      {
        url: "/images/sou-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор СОУ: расчет успеваемости и качества знаний",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор СОУ: расчет успеваемости и качества знаний",
    description:
      "Онлайн инструмент для расчета показателей успеваемости, качества знаний и среднего балла. Помогает учителям оценить уровень обучения учеников.",
    images: ["/images/sou-calculator-twitter.jpg"],
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
              name: "Калькулятор СОУ",
              url: "http://calcoffee.ru/sou-calculator",
              description:
                "Онлайн инструмент для расчета показателей успеваемости, качества знаний и среднего балла. Помогает учителям оценить уровень обучения учеников.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет показателя успеваемости",
                "Расчет качества знаний",
                "Определение среднего балла",
                "Простой интерфейс для учителей",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/sou-calculator-og.jpg",
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
                reviewCount: "85",
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