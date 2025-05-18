import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор пиломатериалов - точный расчет досок в м³ и штуках",
  description:
    "Профессиональный расчет количества и объема досок, бруса, вагонки. Пересчет между кубометрами и штуками. Учет влажности и породы древесины.",
  keywords: [
    "калькулятор досок",
    "расчет пиломатериалов",
    "кубатура древесины",
    "сколько досок в кубе",
    "онлайн расчет бруса",
    "строительные калькуляторы",
  ],
  alternates: {
    canonical: "/lumber-calculator",
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
    title: "Калькулятор пиломатериалов - расчет досок и бруса онлайн",
    description:
      "Точный расчет количества пиломатериалов в кубометрах и штуках. Учет размеров, породы древесины и влажности.",
    url: "/lumber-calculator",
    type: "website",
    images: [
      {
        url: "/images/lumber-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор пиломатериалов - расчет досок и бруса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор пиломатериалов - расчет досок и бруса онлайн",
    description:
      "Онлайн инструмент для строителей: точный расчет объема и количества пиломатериалов.",
    images: ["/images/lumber-calculator-twitter.jpg"],
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
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор пиломатериалов",
              url: "https://boxcalculators.ru/lumber-calculator",
              description:
                "Профессиональный инструмент для расчета объема и количества пиломатериалов с учетом породы древесины и ее влажности.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет кубатуры досок",
                "Перевод м³ ↔ штуки",
                "Учет породы дерева",
                "Корректировка по влажности",
                "Расчет стоимости материалов",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/lumber-calculator-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "125",
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
