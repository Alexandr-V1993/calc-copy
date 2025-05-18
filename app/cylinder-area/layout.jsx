import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор площади цилиндра - полный расчет поверхности онлайн",
  description:
    "Точный расчет площади боковой и полной поверхности цилиндра через радиус и высоту. Формулы, примеры вычислений и практическое применение. Незаменимый инструмент для инженеров и строителей.",
  keywords: [
    "калькулятор площади цилиндра",
    "расчет поверхности цилиндра",
    "площадь боковой поверхности",
    "онлайн калькулятор цилиндра",
    "геометрические расчеты",
    "математические калькуляторы",
  ],
  alternates: {
    canonical: "/cylinder-area",
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
    title: "Калькулятор площади цилиндра - полный расчет онлайн",
    description:
      "Профессиональный расчет площади поверхности цилиндра с примерами и формулами. Вычисление боковой и полной площади.",
    url: "/cylinder-area",
    type: "website",
    images: [
      {
        url: "/images/cylinder-area-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор площади цилиндра - полный расчет онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор площади цилиндра - полный расчет онлайн",
    description:
      "Онлайн инструмент для вычисления площади поверхности цилиндра с примерами и формулами.",
    images: ["/images/cylinder-area-twitter.jpg"],
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
              name: "Калькулятор площади цилиндра",
              url: "https://boxcalculators.ru/cylinder-area",
              description:
                "Профессиональный инструмент для вычисления площади поверхности цилиндра различными методами с примерами и формулами.",
              applicationCategory: "MathApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет боковой поверхности",
                "Расчет полной площади",
                "Примеры вычислений",
                "Подробные формулы",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/cylinder-area-og.jpg",
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
                reviewCount: "156",
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
