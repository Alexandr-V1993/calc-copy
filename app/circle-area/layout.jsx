import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор площади круга - точный расчет по радиусу и диаметру",
  description:
    "Быстрый и точный расчет площади круга через радиус или диаметр. Формулы, примеры вычислений и практическое применение. Незаменимый инструмент для учебы и работы.",
  keywords: [
    "калькулятор площади круга",
    "расчет площади круга",
    "формула площади круга",
    "онлайн калькулятор круга",
    "математические калькуляторы",
    "геометрические расчеты",
  ],
  alternates: {
    canonical: "/circle-area",
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
    title: "Калькулятор площади круга - точный расчет онлайн",
    description:
      "Профессиональный расчет площади круга по радиусу или диаметру с подробными формулами и примерами.",
    url: "/circle-area",
    type: "website",
    images: [
      {
        url: "/images/circle-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади круга - точный расчет онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади круга - точный расчет онлайн",
    description:
      "Онлайн инструмент для вычисления площади круга с примерами и формулами.",
    images: ["/images/circle-area-twitter.jpg"],
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
              name: "Калькулятор площади круга",
              url: "https://boxcalculators.ru/circle-area",
              description:
                "Профессиональный инструмент для вычисления площади круга по радиусу или диаметру с примерами и формулами.",
              applicationCategory: "MathApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет по радиусу",
                "Расчет по диаметру",
                "Примеры вычислений",
                "Мгновенные результаты",
                "Подробные формулы",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/circle-area-og.jpg",
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
                reviewCount: "135",
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
