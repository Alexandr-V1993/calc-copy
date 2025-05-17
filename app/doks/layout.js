import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Документы | CalCoffee",
  description:
    "Официальная документация и информация о проекте CalCoffee. Здесь вы найдете все необходимые материалы, связанные с онлайн-калькуляторами и их использованием.",
  keywords: [
    "документы",
    "calcoffee",
    "онлайн-калькуляторы",
    "александр владимирович",
    "инструкции",
    "справка",
  ],
  alternates: {
    canonical: "/doks",
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
    title: "Документы | CalCoffee",
    description:
      "Официальная документация и информация о проекте CalCoffee. Здесь вы найдете все необходимые материалы, связанные с онлайн-калькуляторами и их использованием.",
    url: "/doks",
    type: "website",
    images: [
      {
        url: "/images/doks-og.jpg",
        width: 1200,
        height: 630,
        alt: "Документы | CalCoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Документы | CalCoffee",
    description:
      "Официальная документация и информация о проекте CalCoffee. Все необходимые материалы для работы с онлайн-калькуляторами.",
    images: ["/images/doks-twitter.jpg"],
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
              "@type": "WebPage",
              name: "Документы | CalCoffee",
              url: "http://calcoffee.ru/doks",
              description:
                "Официальная документация и информация о проекте CalCoffee. Все необходимые материалы для работы с онлайн-калькуляторами.",
              publisher: {
                "@type": "Organization",
                name: "CalCoffee",
                url: "http://calcoffee.ru",
              },
              image: "http://calcoffee.ru/images/doks-og.jpg",
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