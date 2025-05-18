import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор площади треугольника - все способы расчета онлайн",
  description:
    "Точный расчет площади треугольника по разным параметрам: через основание и высоту, по формуле Герона, через две стороны и угол. Подробные формулы и примеры вычислений.",
  keywords: [
    "калькулятор площади треугольника",
    "формула Герона",
    "расчет площади треугольника",
    "онлайн калькулятор треугольника",
    "геометрические расчеты",
    "математические калькуляторы",
  ],
  alternates: {
    canonical: "/triangle-area",
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
    title: "Калькулятор площади треугольника - все способы расчета",
    description:
      "Профессиональный расчет площади треугольника различными методами с примерами и формулами.",
    url: "/triangle-area",
    type: "website",
    images: [
      {
        url: "/images/triangle-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади треугольника - все способы расчета",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади треугольника - все способы расчета",
    description:
      "Онлайн инструмент для вычисления площади треугольника с примерами и формулами.",
    images: ["/images/triangle-area-twitter.jpg"],
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
              name: "Калькулятор площади треугольника",
              url: "https://boxcalculators.ru/triangle-area",
              description:
                "Профессиональный инструмент для вычисления площади треугольника различными методами с примерами и формулами.",
              applicationCategory: "MathApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет по основанию и высоте",
                "Формула Герона",
                "Расчет через две стороны и угол",
                "Примеры вычислений",
                "Подробные формулы",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/triangle-area-og.jpg",
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
                reviewCount: "142",
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
