import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор самогонщика | Расчет крепости и объема алкоголя",
  description:
    "Онлайн калькулятор для самогонщиков. Рассчитайте крепость самогона, разведение спирта, пропорции браги и выход готового продукта. Простой и точный инструмент для домашнего производства.",
  keywords: [
    "калькулятор самогонщика",
    "расчет крепости самогона",
    "разведение спирта",
    "расчет браги",
    "домашнее самогоноварение",
    "алкогольный калькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/alcohol-strength",
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
    title: "Калькулятор самогонщика | BoxCalculators",
    description:
      "Инструмент для расчёта крепости самогона, разведения спирта, составления пропорций браги и определения выхода готового алкоголя. Подходит для начинающих и опытных самогонщиков.",
    url: "/alcohol-strength",
    type: "website",
    images: [
      {
        url: "/images/alcohol-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор самогонщика от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор самогонщика | BoxCalculators",
    description:
      "Удобный онлайн-инструмент для самогоноварения. Рассчитывайте крепость, объем, пропорции браги и многое другое быстро и точно.",
    images: ["/images/alcohol-calculator-twitter.jpg"],
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
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор самогонщика",
              url: "https://boxcalculators.ru/alcohol-strength ",
              description:
                "Онлайн инструмент для расчёта крепости самогона, разведения спирта, пропорций браги и выхода готового продукта. Простой и удобный интерфейс.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт крепости самогона",
                "Разведение спирта до нужной концентрации",
                "Определение пропорций браги",
                "Мгновенный результат",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/alcohol-calculator-og.jpg ",
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
                ratingValue: "4.7",
                reviewCount: "120",
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
