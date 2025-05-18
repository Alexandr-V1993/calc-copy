import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор алкоголя в крови | Онлайн расчет уровня опьянения",
  description:
    "Онлайн калькулятор уровня алкоголя в крови от BoxCalculators. Рассчитайте концентрацию этанола после употребления спиртного и узнайте время его вывода из организма.",
  keywords: [
    "калькулятор алкоголя в крови",
    "уровень алкоголя онлайн",
    "bac калькулятор",
    "вывод алкоголя из организма",
    "допустимая норма за рулем",
    "алкокалькулятор",
    "boxcalculators",
    "boxcalculators.ru",
  ],
  alternates: {
    canonical: "/blood-alcohol",
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
    title: "Калькулятор алкоголя в крови | BoxCalculators",
    description:
      "Рассчитайте уровень алкоголя в крови и прогнозируемое время трезвения. Инструмент для водителей, студентов и всех, кто хочет понять влияние алкоголя на организм.",
    url: "/blood-alcohol",
    type: "website",
    images: [
      {
        url: "/images/bac-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор алкоголя в крови от BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор алкоголя в крови | BoxCalculators",
    description:
      "Узнайте, сколько алкоголя в вашей крови, и через какое время вы будете трезвы. Полезно для водителей и учебных целей.",
    images: ["/images/bac-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://boxcalculators.ru/blood-alcohol " />

        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор алкоголя в крови",
              url: "https://boxcalculators.ru/blood-alcohol ",
              description:
                "Онлайн инструмент для расчёта содержания алкоголя в крови и времени его вывода. Подходит для водителей и образовательных целей.",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчёт уровня алкоголя в крови (BAC)",
                "Прогноз времени трезвения",
                "Мгновенный результат",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/bac-calculator-og.jpg ",
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
                ratingValue: "4.6",
                reviewCount: "85",
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
