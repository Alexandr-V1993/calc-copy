import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор жима лежа - рассчитайте ваш одноповторный максимум",
  description:
    "Калькулятор для определения вашего одноповторного максимума в жиме лежа. Введите вес и количество повторений для расчета.",
  keywords: [
    "калькулятор жима лежа",
    "одноповторный максимум",
    "расчет жима лежа",
    "1ПМ калькулятор",
    "силовые показатели",
  ],
  alternates: {
    canonical: "/bench-press-calculator",
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
    title: "Калькулятор жима лежа",
    description: "Рассчитайте ваш одноповторный максимум в жиме лежа",
    url: "/bench-press-calculator",
    type: "website",
    images: [
      {
        url: "/images/bench-press-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор жима лежа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор жима лежа",
    description: "Рассчитайте ваш одноповторный максимум в жиме лежа",
    images: ["/images/bench-press-calculator-twitter.jpg"],
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор жима лежа",
              url: "http://calcoffee.ru/bench-press-calculator",
              description:
                "Калькулятор для расчета одноповторного максимума в жиме лежа",
              applicationCategory: "FitnessApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет одноповторного максимума",
                "Прогноз силовых показателей",
                "Мгновенный результат",
                "Простой интерфейс",
                "Точные расчеты",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/bench-press-calculator-og.jpg",
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
                reviewCount: "150",
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
