import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://calcoffee.ru"),
  title: "Калькулятор трудового стажа | Расчет страхового стажа для пенсии",
  description:
    "Бесплатный онлайн калькулятор стажа для точного расчета трудового и страхового стажа по трудовой книжке. Узнайте сколько лет стажа для пенсии, конвертируйте периоды работы в стаж, учитывайте больничные и декретные. Подходит для пенсионного фонда и бухгалтерии.",
  keywords: [
    "калькулятор стажа онлайн",
    "расчет трудового стажа",
    "страховой стаж для пенсии",
    "подсчет стажа по трудовой книжке",
    "калькулятор пенсионного стажа",
    "как рассчитать стаж работы",
    "стаж для больничного листа",
    "конвертер стажа",
    "учет стажа для пенсии",
    "пенсионный калькулятор",
    "расчет стажа для отпуска",
    "трудовой стаж онлайн",
    "калькулятор северного стажа",
    "стаж для выхода на пенсию",
    "калькулятор педагогического стажа",
    "медицинский стаж расчет",
  ],
  alternates: {
    canonical: "/seniority-calculator",
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
    title: "Калькулятор трудового стажа | Расчет страхового стажа для пенсии",
    description:
      "Точный расчет трудового и страхового стажа по трудовой книжке. Учитывает все периоды для пенсии, больничных и отпусков. Бесплатный онлайн инструмент.",
    url: "/seniority-calculator",
    type: "website",
    images: [
      {
        url: "/images/seniority-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор трудового стажа | Расчет страхового стажа для пенсии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор трудового стажа | Расчет страхового стажа для пенсии",
    description:
      "Бесплатный онлайн инструмент для точного расчета всех видов стажа по трудовой книжке",
    images: ["/images/seniority-calculator-twitter.jpg"],
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
        <meta
          name="google-site-verification"
          content="ueaW9-Ty2f1CJX6Fz60Robte2vEZ1nHWGdjXxaq09Fs"
        />
        <meta name="yandex-verification" content="8e171312279be75a" />

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор трудового стажа",
              url: "https://calcoffee.ru/seniority-calculator",
              description:
                "Онлайн калькулятор для расчета трудового и страхового стажа по трудовой книжке",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет трудового стажа",
                "Расчет страхового стажа",
                "Учет больничных и декретных",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://calcoffee.ru/images/seniority-calculator-og.jpg",
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
                reviewCount: "87",
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