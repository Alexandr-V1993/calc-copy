import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор перегонки спирта | Оптимизация дробной перегонки",
  description:
    "Оптимизируйте процесс перегонки спирта с нашим калькулятором для разделения голов и хвостов. Точные расчеты для вторичной перегонки спирта.",
  keywords: [
    "калькулятор перегонки спирта",
    "оптимизация дробной перегонки",
    "отделение голов и хвостов",
    "вторичная перегонка спирта",
    "калькулятор спиртовых фракций",
  ],
  alternates: {
    canonical: "/second-fractional-distillation",
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
    title: "Калькулятор перегонки спирта | Оптимизация дробной перегонки",
    description:
      "Оптимизируйте процесс перегонки спирта с нашим калькулятором для разделения голов и хвостов. Точные расчеты для вторичной перегонки спирта.",
    url: "/second-fractional-distillation",
    type: "website",
    images: [
      {
        url: "/images/spirit-distillation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор перегонки спирта | Оптимизация дробной перегонки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор перегонки спирта | Оптимизация дробной перегонки",
    description:
      "Онлайн инструмент для оптимизации процесса перегонки спирта. Разделение голов и хвостов, точные расчеты для вторичной перегонки.",
    images: ["/images/spirit-distillation-twitter.jpg"],
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
              name: "Калькулятор перегонки спирта",
              url: "http://calcoffee.ru/second-fractional-distillation",
              description:
                "Онлайн инструмент для оптимизации процесса перегонки спирта. Разделение голов и хвостов, точные расчеты для вторичной перегонки.",
              applicationCategory: "DistillationApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет объема голов и хвостов",
                "Оптимизация дробной перегонки",
                "Точные результаты для вторичной перегонки",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/spirit-distillation-og.jpg",
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
                reviewCount: "170",
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