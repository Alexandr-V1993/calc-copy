import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор смешивания спиртов | Определите крепость",
  description:
    "Используйте наш калькулятор для точного расчета крепости при смешивании спиртов разной концентрации. Упростите процесс смешивания и получите нужный результат быстро.",
  keywords: [
    "калькулятор смешивания спиртов",
    "расчет крепости спиртов",
    "смешивание алкоголя",
    "калькулятор самогона",
    "спиртовой калькулятор",
  ],
  alternates: {
    canonical: "/moonshiner-calculator",
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
    title: "Калькулятор смешивания спиртов | Определите крепость",
    description:
      "Используйте наш калькулятор для точного расчета крепости при смешивании спиртов разной концентрации. Упростите процесс смешивания и получите нужный результат быстро.",
    url: "/moonshiner-calculator",
    type: "website",
    images: [
      {
        url: "/images/moonshiner-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор смешивания спиртов | Определите крепость",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор смешивания спиртов | Определите крепость",
    description:
      "Онлайн инструмент для расчета крепости при смешивании спиртов разной концентрации. Быстро и точно определите результат.",
    images: ["/images/moonshiner-calculator-twitter.jpg"],
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
              name: "Калькулятор смешивания спиртов",
              url: "http://calcoffee.ru/moonshiner-calculator",
              description:
                "Онлайн инструмент для расчета крепости при смешивании спиртов разной концентрации. Быстро и точно определите результат.",
              applicationCategory: "AlcoholManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет крепости при смешивании",
                "Поддержка разных концентраций",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/moonshiner-calculator-og.jpg",
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
                ratingValue: "4.5",
                reviewCount: "90",
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