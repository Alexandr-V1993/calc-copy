import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор сна | Онлайн расчет фаз сна",
  description:
    "Онлайн калькулятор сна помогает рассчитать оптимальное время для засыпания или пробуждения, учитывая циклы и фазы сна. Удобный инструмент для здорового образа жизни.",
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
    canonical: "/sleep-phases",
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
    title: "Калькулятор сна онлайн | BoxCalculators",
    description:
      "Онлайн-инструмент для расчёта времени засыпания и пробуждения на основе фаз сна. Подходит для планирования режима и улучшения качества отдыха.",
    url: "/sleep-phases",
    type: "website",
    images: [
      {
        url: "/images/sleep-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор сна онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор сна онлайн | BoxCalculators",
    description:
      "Удобный инструмент для расчета оптимального времени сна и пробуждения. Просыпайтесь бодрыми и выспавшимися!",
    images: ["/images/sleep-calculator-twitter.jpg"],
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
              name: "Калькулятор сна",
              url: "https://boxcalculators.ru/sleep-phases ",
              description:
                "Онлайн инструмент для расчета времени сна и пробуждения. Оптимизируйте фазы сна и улучшите качество отдыха.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет времени засыпания",
                "Расчет времени пробуждения",
                "Учет циклов сна",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/sleep-calculator-og.jpg ",
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
                reviewCount: "200",
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
