import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор самогонщика: расчет крепости и объема",
  description:
    "Онлайн калькулятор самогонщика для расчета крепости самогона, разведения спирта, определения пропорций браги и расчета выхода готового продукта.",
  keywords: [
    "калькулятор самогонщика",
    "расчет крепости самогона",
    "разведение спирта",
    "расчет браги",
    "самогоноварение",
  ],
  alternates: {
    canonical: "/alcohol-calculator",
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
    title: "Калькулятор самогонщика: расчет крепости и объема",
    description:
      "Онлайн калькулятор самогонщика для расчета крепости самогона, разведения спирта, определения пропорций браги и расчета выхода готового продукта.",
    url: "/alcohol-calculator",
    type: "website",
    images: [
      {
        url: "/images/alcohol-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор самогонщика: расчет крепости и объема",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор самогонщика: расчет крепости и объема",
    description:
      "Онлайн инструмент для расчета крепости самогона, разведения спирта, пропорций браги и выхода готового продукта. Простой и удобный интерфейс.",
    images: ["/images/alcohol-calculator-twitter.jpg"],
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
              name: "Калькулятор самогонщика",
              url: "http://calcoffee.ru/alcohol-calculator",
              description:
                "Онлайн инструмент для расчета крепости самогона, разведения спирта, пропорций браги и выхода готового продукта. Простой и удобный интерфейс.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет крепости самогона",
                "Разведение спирта до нужной крепости",
                "Определение пропорций браги",
                "Мгновенный результат",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/alcohol-calculator-og.jpg",
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
                reviewCount: "120",
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