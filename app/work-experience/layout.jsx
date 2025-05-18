import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор трудового стажа | Онлайн расчет для пенсии",
  description:
    "Онлайн калькулятор трудового и страхового стажа. Рассчитайте опыт работы по трудовой книжке или для оформления пенсии, больничного листа, отпуска или социальных выплат.",
  keywords: [
    "калькулятор стажа онлайн",
    "расчет трудового стажа",
    "страховой стаж для пенсии",
    "подсчет стажа по трудовой книжке",
    "как рассчитать стаж работы",
    "стаж для выхода на пенсию",
    "учет стажа для больничного",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/work-experience",
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
    title: "Калькулятор трудового стажа | BoxCalculators",
    description:
      "Рассчитайте ваш трудовой и страховой стаж быстро и точно. Подходит для пенсионного фонда, бухгалтерии и личных целей.",
    url: "/work-experience",
    type: "website",
    images: [
      {
        url: "/images/seniority-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор трудового стажа от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор трудового стажа | BoxCalculators",
    description:
      "Бесплатный инструмент для расчёта стажа по трудовой книжке, страховых периодов и других оснований для пенсии, больничного или отпуска.",
    images: ["/images/seniority-calculator-twitter.jpg"],
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
          href="https://boxcalculators.ru/work-experience "
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
              name: "Калькулятор трудового стажа",
              url: "https://boxcalculators.ru/work-experience ",
              description:
                "Онлайн калькулятор для расчёта трудового и страхового стажа по трудовой книжке и другим документам. Позволяет учитывать декрет, армию, больничные и другие официальные периоды.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт трудового стажа",
                "Расчёт страхового стажа",
                "Учет декретных, больничных и военной службы",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/seniority-calculator-og.jpg ",
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
                reviewCount: "87",
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
