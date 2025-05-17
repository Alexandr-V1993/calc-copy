import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Онлайн калькулятор песка - Перевод м³ в тонны и обратно",
  description:
    "Удобный онлайн-калькулятор для точного перевода объема песка из кубических метров в тонны и обратно. Рассчитайте количество песка для строительных нужд быстро и легко.",
  keywords: [
    "калькулятор песка",
    "перевод песка м3 в тонны",
    "расчет песка",
    "строительные материалы",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/sand-calculator-online",
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
    title: "Онлайн калькулятор песка - Перевод м³ в тонны и обратно",
    description:
      "Удобный онлайн-калькулятор для точного перевода объема песка из кубических метров в тонны и обратно. Рассчитайте количество песка для строительных нужд быстро и легко.",
    url: "/sand-calculator-online",
    type: "website",
    images: [
      {
        url: "/images/sand-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор песка - Перевод м³ в тонны и обратно",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн калькулятор песка - Перевод м³ в тонны и обратно",
    description:
      "Онлайн инструмент для перевода объема песка из м³ в тонны и обратно. Быстро и точно рассчитывайте количество песка для строительства.",
    images: ["/images/sand-calculator-twitter.jpg"],
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
              name: "Онлайн калькулятор песка",
              url: "http://calcoffee.ru/sand-calculator-online",
              description:
                "Онлайн инструмент для перевода объема песка из м³ в тонны и обратно. Быстро и точно рассчитывайте количество песка для строительства.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод м³ в тонны",
                "Перевод тонн в м³",
                "Расчет количества песка",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/sand-calculator-og.jpg",
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
          suppressHydrationWarning // Подавление предупреждений о гидратации
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}