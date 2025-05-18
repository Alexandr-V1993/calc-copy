import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор среднего балла аттестата | Онлайн расчет успеваемости",
  description:
    "Онлайн калькулятор среднего балла аттестата за 9 или 11 класс. Точный инструмент для школьников, родителей и преподавателей при подготовке к поступлению.",
  keywords: [
    "калькулятор среднего балла аттестата",
    "средний балл 9 класс",
    "баллы аттестата онлайн",
    "расчет оценок аттестата",
    "поступление в колледж",
    "балл для поступления в вуз",
    "школьный аттестат",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/certificate-grade",
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
    title: "Калькулятор среднего балла аттестата | BoxCalculators",
    description:
      "Рассчитайте средний балл аттестата за 9 или 11 класс онлайн. Простой и точный калькулятор для школьников, родителей и педагогов.",
    url: "/certificate-grade",
    type: "website",
    images: [
      {
        url: "/images/attestation-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор среднего балла аттестата от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор среднего балла аттестата | BoxCalculators",
    description:
      "Бесплатный онлайн-инструмент для расчёта среднего балла аттестата за 9 или 11 класс. Подходит для поступления в колледжи и вузы.",
    images: ["/images/attestation-calculator-twitter.jpg"],
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
          href="https://boxcalculators.ru/certificate-grade "
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
              name: "Калькулятор среднего балла аттестата",
              url: "https://boxcalculators.ru/certificate-grade ",
              description:
                "Онлайн инструмент для расчёта среднего балла школьного аттестата. Подходит для выпускников 9 и 11 класса, абитуриентов, родителей и педагогов.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт среднего балла аттестата",
                "Поддержка 9 и 11 классов",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/attestation-calculator-og.jpg ",
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
                reviewCount: "125",
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
