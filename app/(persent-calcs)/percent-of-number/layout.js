import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор процента от числа | Точный онлайн расчет %",
  description:
    "Мгновенно вычисляйте процент от любого числа. Идеально для расчетов скидок, налогов, чаевых и других повседневных вычислений. Формула: (Число × Процент) / 100.",
  keywords: [
    "калькулятор процента от числа",
    "вычислить процент от суммы",
    "онлайн расчет процентов",
    "калькулятор скидок",
    "расчет налога от суммы",
    "вычисление чаевых",
    "процентный калькулятор",
    "математические расчеты",
    "финансовые проценты",
    "быстрый расчет процентов",
  ],
  alternates: {
    canonical: "/percentage-of-number",
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
    title: "Онлайн калькулятор: процент от числа",
    description:
      "Простой и точный расчет процента от любой суммы. Используйте для финансовых операций, торговых скидок и бытовых расчетов.",
    url: "/percentage-of-number",
    type: "website",
    images: [
      {
        url: "/images/percentage-of-number-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор процентов от числа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор процента от числа",
    description:
      "Мгновенно вычисляйте сколько составит процент от любой суммы. Идеально для повседневных расчетов.",
    images: ["/images/percentage-of-number-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор процента от числа",
              url: "https://boxcalculators.ru/percentage-of-number",
              description:
                "Профессиональный инструмент для точного вычисления процента от любого числа с подробными результатами.",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет процента от любой суммы",
                "Мгновенные результаты",
                "Подробная формула расчета",
                "Подходит для финансовых операций",
                "Простое управление",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/percentage-of-number-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "115",
                bestRating: "5",
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
