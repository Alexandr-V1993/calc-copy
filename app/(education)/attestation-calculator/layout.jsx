import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://calcoffee.ru"),
  title:
    "Калькулятор среднего балла аттестата онлайн | Расчет для 9 и 11 класса",
  description:
    "Быстрый и точный расчет среднего балла аттестата за 9 и 11 класс. Удобный инструмент для школьников, родителей и учителей. Подходит для подачи документов в колледжи и вузы.",
  keywords: [
    "калькулятор среднего балла",
    "средний балл аттестата",
    "расчет баллов аттестата",
    "аттестат 9 класс",
    "аттестат 11 класс",
    "оценки в аттестате",
    "как посчитать средний балл",
    "калькулятор оценок",
    "успеваемость ученика",
    "поступление в колледж",
    "поступление в вуз",
    "школьный аттестат",
    "балл для поступления",
  ],
  alternates: {
    canonical: "/attestation-calculator",
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
    title:
      "Калькулятор среднего балла аттестата онлайн | Расчет для 9 и 11 класса",
    description:
      "Рассчитайте средний балл аттестата быстро и точно. Незаменимый инструмент для школьников при подаче документов в колледжи и вузы.",
    url: "/attestation-calculator",
    type: "website",
    images: [
      {
        url: "/images/attestation-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор среднего балла аттестата",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Калькулятор среднего балла аттестата онлайн | Расчет для 9 и 11 класса",
    description:
      "Бесплатный онлайн-калькулятор для точного расчета среднего балла школьного аттестата. Помощь в подготовке к поступлению.",
    images: ["/images/attestation-calculator-twitter.jpg"],
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
              name: "Калькулятор среднего балла аттестата",
              url: "https://calcoffee.ru/attestation-calculator",
              description:
                "Онлайн инструмент для расчета среднего балла школьного аттестата за 9 и 11 класс. Удобен для школьников, родителей и учителей.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет среднего балла аттестата",
                "Поддержка 9 и 11 классов",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://calcoffee.ru/images/attestation-calculator-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "CalCoffee",
                  url: "https://calcoffee.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "125",
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