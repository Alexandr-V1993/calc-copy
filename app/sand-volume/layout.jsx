import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор песка онлайн - перевод м³ в тонны и кг | BoxCalculators",
  description:
    "Точный расчет объема и веса песка: перевод кубических метров в тонны и килограммы. Учет типа песка и влажности. Быстрый и удобный инструмент для строителей.",
  keywords: [
    "калькулятор песка",
    "перевод м3 в тонны",
    "расчет песка для строительства",
    "объем песка в тоннах",
    "онлайн калькулятор сыпучих материалов",
    "плотность песка",
  ],
  alternates: {
    canonical: "/sand-volume",
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
    title: "Калькулятор песка - точный перевод м³ в тонны и обратно",
    description:
      "Профессиональный расчет объема и веса песка с учетом типа материала и влажности. Удобный инструмент для строительных расчетов.",
    url: "/sand-volume",
    type: "website",
    images: [
      {
        url: "/images/sand-volume-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор песка - перевод кубических метров в тонны",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор песка - точный перевод м³ в тонны и обратно",
    description:
      "Онлайн инструмент для строителей: расчет веса и объема песка с учетом плотности материала.",
    images: ["/images/sand-volume-twitter.jpg"],
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
              name: "Калькулятор объема песка",
              url: "https://boxcalculators.ru/sand-volume",
              description:
                "Профессиональный инструмент для перевода объема песка между кубическими метрами, тоннами и килограммами с учетом типа материала.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод м³ ↔ тонны",
                "Учет типа песка",
                "Корректировка по влажности",
                "Расчет для разных фракций",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/sand-volume-og.jpg",
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
                ratingValue: "4.9",
                reviewCount: "167",
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
