import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор дробей онлайн",
  description:
    "Калькулятор дробей поможет вам оперативно выполнить сложение, вычитание, умножение и деление как обычных, так и смешанных дробей.",
  keywords: [
    "калькулятор дробей",
    "сложение дробей",
    "вычитание дробей",
    "умножение дробей",
    "деление дробей",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/fraction-calculator",
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
    title: "Калькулятор дробей онлайн",
    description:
      "Калькулятор дробей поможет вам оперативно выполнить сложение, вычитание, умножение и деление как обычных, так и смешанных дробей.",
    url: "/fraction-calculator",
    type: "website",
    images: [
      {
        url: "/images/fraction-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор дробей онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор дробей онлайн",
    description:
      "Онлайн инструмент для выполнения математических операций с дробями: сложение, вычитание, умножение и деление. Простой и удобный интерфейс.",
    images: ["/images/fraction-calculator-twitter.jpg"],
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
              name: "Калькулятор дробей",
              url: "http://calcoffee.ru/fraction-calculator",
              description:
                "Онлайн инструмент для выполнения математических операций с дробями: сложение, вычитание, умножение и деление. Простой и удобный интерфейс.",
              applicationCategory: "MathematicalApplication",
              operatingSystem: "Web",
              featureList: [
                "Сложение дробей",
                "Вычитание дробей",
                "Умножение дробей",
                "Деление дробей",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/fraction-calculator-og.jpg",
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