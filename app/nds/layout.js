import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор НДС онлайн | Расчет и выделение",
  description:
    "Онлайн Калькулятор НДС: быстрый расчет суммы с НДС. Введите сумму без НДС, выберите ставку (0%, 10%, 20%), и получите результат.",
  keywords: [
    "калькулятор НДС",
    "расчет НДС онлайн",
    "выделение НДС",
    "ставка НДС 20%",
    "ставка НДС 10%",
    "ставка НДС 0%",
  ],
  alternates: {
    canonical: "/nds",
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
    title: "Калькулятор НДС онлайн: расчет и выделение",
    description:
      "Онлайн Калькулятор НДС: быстрый расчет суммы с НДС. Введите сумму без НДС, выберите ставку (0%, 10%, 20%), и получите результат.",
    url: "/nds",
    type: "website",
    images: [
      {
        url: "/images/nds-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор НДС онлайн: расчет и выделение",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор НДС онлайн: расчет и выделение",
    description:
      "Онлайн инструмент для расчета НДС по ставкам 0%, 10%, 20%. Быстро и точно определите сумму с НДС или выделите НДС из общей суммы.",
    images: ["/images/nds-calculator-twitter.jpg"],
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
              name: "Калькулятор НДС",
              url: "http://calcoffee.ru/nds",
              description:
                "Онлайн инструмент для расчета НДС по ставкам 0%, 10%, 20%. Быстро и точно определите сумму с НДС или выделите НДС из общей суммы.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет НДС по разным ставкам",
                "Выделение НДС из общей суммы",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/nds-calculator-og.jpg",
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
                reviewCount: "110",
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