import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор процентов: онлайн расчет процентов",
  description:
    "Калькулятор процентов онлайн. Определите разницу в процентах между двумя числами, узнайте, насколько одно число превосходит или уступает другому, и выполните прибавление или вычитание процента от числа.",
  keywords: [
    "калькулятор процентов",
    "расчет процентов онлайн",
    "процентное соотношение",
    "процентное вычисление",
  ],
  alternates: {
    canonical: "/percent",
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
    title: "Калькулятор процентов: онлайн расчет процентов",
    description:
      "Калькулятор процентов онлайн. Определите разницу в процентах между двумя числами, узнайте, насколько одно число превосходит или уступает другому, и выполните прибавление или вычитание процента от числа.",
    url: "/percent",
    type: "website",
    images: [
      {
        url: "/images/percent-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор процентов: онлайн расчет процентов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор процентов: онлайн расчет процентов",
    description:
      "Онлайн инструмент для расчета процентов: разница между числами, процентное соотношение, прибавление и вычитание процента. Простой и удобный интерфейс.",
    images: ["/images/percent-calculator-twitter.jpg"],
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
              name: "Калькулятор процентов",
              url: "http://calcoffee.ru/percent",
              description:
                "Онлайн инструмент для расчета процентов: разница между числами, процентное соотношение, прибавление и вычитание процента. Простой и удобный интерфейс.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет разницы в процентах",
                "Прибавление и вычитание процента",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/percent-calculator-og.jpg",
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
                reviewCount: "130",
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