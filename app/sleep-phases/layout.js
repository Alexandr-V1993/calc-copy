import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор сна",
  description:
    "Онлайн-калькулятор сна: рассчитайте оптимальное время для пробуждения или засыпания, чтобы чувствовать себя бодрым и отдохнувшим. Узнайте, сколько нужно спать для здорового сна.",
  keywords: [
    "калькулятор сна",
    "рассчитать время сна",
    "здоровый сон",
    "фазы сна",
    "время пробуждения",
    "время засыпания",
    "сколько нужно спать",
  ],
  alternates: {
    canonical: "/sleep-calculator",
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
    title: "Калькулятор сна: рассчитайте оптимальное время для сна",
    description:
      "Онлайн-калькулятор сна: рассчитайте оптимальное время для пробуждения или засыпания, чтобы чувствовать себя бодрым и отдохнувшим. Узнайте, сколько нужно спать для здорового сна.",
    url: "/sleep-calculator",
    type: "website",
    images: [
      {
        url: "/images/sleep-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сна: рассчитайте оптимальное время для сна",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сна: рассчитайте оптимальное время для сна",
    description:
      "Онлайн инструмент для расчета времени сна и пробуждения. Оптимизируйте фазы сна и улучшите качество отдыха.",
    images: ["/images/sleep-calculator-twitter.jpg"],
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
              name: "Калькулятор сна",
              url: "http://calcoffee.ru/sleep-calculator",
              description:
                "Онлайн инструмент для расчета времени сна и пробуждения. Оптимизируйте фазы сна и улучшите качество отдыха.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет оптимального времени засыпания",
                "Расчет времени пробуждения",
                "Учет фаз сна",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/sleep-calculator-og.jpg",
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
                reviewCount: "200",
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