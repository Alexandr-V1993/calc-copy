import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор сахарной браги: Оптимальные пропорции",
  description:
    "Рассчитайте идеальные пропорции алкоголя, воды и сахара для сахарной браги с нашим онлайн калькулятором. Простой инструмент для приготовления напитков.",
  keywords: [
    "калькулятор сахарной браги",
    "расчёт пропорций браги",
    "сахарная брага онлайн",
    "приготовление браги",
    "калькулятор напитков",
  ],
  alternates: {
    canonical: "/sugar-braga",
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
    title: "Калькулятор сахарной браги: Оптимальные пропорции",
    description:
      "Рассчитайте идеальные пропорции алкоголя, воды и сахара для сахарной браги с нашим онлайн калькулятором. Простой инструмент для приготовления напитков.",
    url: "/sugar-braga",
    type: "website",
    images: [
      {
        url: "/images/sugar-braga-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сахарной браги: Оптимальные пропорции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сахарной браги: Оптимальные пропорции",
    description:
      "Онлайн калькулятор для расчета пропорций алкоголя, воды и сахара. Идеальный инструмент для приготовления сахарной браги.",
    images: ["/images/sugar-braga-twitter.jpg"],
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
              name: "Калькулятор сахарной браги",
              url: "http://calcoffee.ru/sugar-braga",
              description:
                "Онлайн калькулятор для расчета пропорций алкоголя, воды и сахара. Идеальный инструмент для приготовления сахарной браги.",
              applicationCategory: "FoodApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет пропорций алкоголя",
                "Расчет объема воды",
                "Расчет количества сахара",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/sugar-braga-og.jpg",
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
                ratingValue: "4.9",
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