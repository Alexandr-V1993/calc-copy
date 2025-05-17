import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор оценок: расчет среднего балла и оценок",
  description:
    "Используйте онлайн калькулятор оценок для быстрого расчета среднего балла и рекомендованных оценок. Идеально подходит для определения успеваемости ученика.",
  keywords: [
    "калькулятор оценок",
    "расчет среднего балла",
    "онлайн калькулятор успеваемости",
    "оценка успеваемости",
    "средний балл",
    "рекомендации по оценкам",
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
    title: "Калькулятор оценок: расчет среднего балла и оценок",
    description:
      "Используйте онлайн калькулятор оценок для быстрого расчета среднего балла и рекомендованных оценок. Идеально подходит для определения успеваемости ученика.",
    url: "/gpa-calculator",
    type: "website",
    images: [
      {
        url: "/images/gpa-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор оценок: расчет среднего балла и оценок",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор оценок: расчет среднего балла и оценок",
    description:
      "Онлайн инструмент для расчета среднего балла и рекомендованных оценок. Помогает определить успеваемость ученика.",
    images: ["/images/gpa-calculator-twitter.jpg"],
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
              name: "Калькулятор оценок",
              url: "http://calcoffee.ru/gpa-calculator",
              description:
                "Онлайн инструмент для расчета среднего балла и рекомендованных оценок. Помогает определить успеваемость ученика.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет среднего балла",
                "Рекомендации по оценкам",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/gpa-calculator-og.jpg",
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
                ratingValue: "4.8",
                reviewCount: "95",
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