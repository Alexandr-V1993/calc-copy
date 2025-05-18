import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор сахарной браги | Точный расчет пропорций",
  description:
    "Онлайн-инструмент для расчёта оптимальных пропорций воды, сахара и дрожжей при приготовлении сахарной браги. Быстро и точно рассчитайте объемы для ферментации.",
  keywords: [
    "калькулятор сахарной браги",
    "расчет пропорций браги",
    "сахарная брага онлайн",
    "рецепты самогонки",
    "домашнее самогоноварение",
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
    title: "Калькулятор сахарной браги онлайн | BoxCalculators",
    description:
      "Рассчитайте точные пропорции сахара, воды и дрожжей для идеальной ферментации. Простой и понятный инструмент для самогонщиков и виноделов.",
    url: "/sugar-braga",
    type: "website",
    images: [
      {
        url: "/images/sugar-braga-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сахарной браги онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сахарной браги онлайн | BoxCalculators",
    description:
      "Определите нужное количество сахара, воды и дрожжей для вашей браги. Онлайн-калькулятор для точного контроля над процессом ферментации.",
    images: ["/images/sugar-braga-twitter.jpg"],
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
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор сахарной браги",
              url: "https://boxcalculators.ru/sugar-braga ",
              description:
                "Инструмент для расчёта пропорций воды, сахара и дрожжей при создании сахарной браги. Подходит для начинающих и опытных самогонщиков.",
              applicationCategory: "AlcoholManagementApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт объема воды",
                "Рассчитать количество сахара",
                "Мгновенный результат",
                "Простой интерфейс",
                "Таблицы и советы по ферментации",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/sugar-braga-og.jpg ",
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
                ratingValue: "4.9",
                reviewCount: "110",
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
