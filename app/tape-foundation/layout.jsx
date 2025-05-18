import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор ленточного фундамента | Расчет материалов онлайн",
  description:
    "Профессиональный расчет ленточного фундамента: арматура, бетон, опалубка. Точные вычисления для строительства дома с учетом типа грунта и нагрузок.",
  keywords: [
    "калькулятор ленточного фундамента",
    "расчет ленточного основания",
    "арматура для фундамента",
    "объем бетона",
    "строительный калькулятор",
    "онлайн расчет фундамента",
  ],
  alternates: {
    canonical: "/tape-foundation",
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
    title: "Калькулятор ленточного фундамента | Расчет материалов онлайн",
    description:
      "Точный расчет параметров ленточного фундамента: арматура, бетон, опалубка. Учет типа грунта и нагрузок.",
    url: "/tape-foundation",
    type: "website",
    images: [
      {
        url: "/images/tape-foundation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор ленточного фундамента | Расчет материалов онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор ленточного фундамента | Расчет материалов онлайн",
    description:
      "Профессиональный инструмент для расчета ленточного фундамента с учетом всех строительных параметров.",
    images: ["/images/tape-foundation-twitter.jpg"],
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
              name: "Калькулятор ленточного фундамента",
              url: "https://boxcalculators.ru/tape-foundation",
              description:
                "Профессиональный инструмент для расчета ленточного фундамента с учетом типа грунта, нагрузок и строительных норм.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет арматуры",
                "Определение объема бетона",
                "Расчет опалубки",
                "Учет типа грунта",
                "Мгновенные результаты",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/tape-foundation-og.jpg",
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
                reviewCount: "145",
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
