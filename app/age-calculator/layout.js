import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://calcoffee.ru"),
  title: "Калькулятор возраста онлайн | Расчет",
  description:
    "Бесплатный калькулятор возраста: расчет возраста в годах, месяцах, неделях, днях, часах, минутах и секундах для вашего планирования и воспоминаний.",
  keywords: [
    "калькулятор возраста",
    "расчет возраста",
    "возраст в днях",
    "возраст в неделях",
    "возраст в годах",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/age-calculator",
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
    title: "Калькулятор возраста онлайн | Расчет",
    description:
      "Бесплатный калькулятор возраста: расчет возраста в годах, месяцах, неделях, днях, часах, минутах и секундах для вашего планирования и воспоминаний.",
    url: "/age-calculator",
    type: "website",
    images: [
      {
        url: "/images/age-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор возраста онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор возраста онлайн | Расчет",
    description:
      "Онлайн инструмент для точного расчета возраста в годах, месяцах, неделях, днях, часах, минутах и секундах. Простой и удобный интерфейс.",
    images: ["/images/age-calculator-twitter.jpg"],
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
              name: "Калькулятор возраста онлайн",
              url: "https://calcoffee.ru/age-calculator",
              description:
                "Онлайн инструмент для точного расчета возраста в годах, месяцах, неделях, днях, часах, минутах и секундах. Простой и удобный интерфейс.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет возраста в разных единицах времени",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://calcoffee.ru/images/age-calculator-og.jpg",
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
                reviewCount: "150",
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