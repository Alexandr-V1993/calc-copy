import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
  description:
    "Онлайн калькулятор монолитной плиты фундамента для расчетов толщины, арматуры, опалубки и объема бетона. Быстрый и точный расчет для строительства.",
  keywords: [
    "калькулятор плитного фундамента",
    "расчет монолитной плиты",
    "фундаментная плита",
    "расчет бетона для фундамента",
    "строительный калькулятор",
    "онлайн расчет фундамента",
  ],
  alternates: {
    canonical: "/slab-foundation",
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
    title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
    description:
      "Онлайн калькулятор монолитной плиты фундамента для расчетов толщины, арматуры, опалубки и объема бетона.",
    url: "/slab-foundation",
    type: "website",
    images: [
      {
        url: "/images/slab-foundation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор плитного фундамента онлайн – точный расчет параметров",
    description:
      "Профессиональный инструмент для расчета монолитного плитного фундамента с учетом всех строительных параметров.",
    images: ["/images/slab-foundation-twitter.jpg"],
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

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор плитного фундамента",
              url: "https://boxcalculators.ru/slab-foundation",
              description:
                "Профессиональный инструмент для расчета монолитного плитного фундамента с учетом всех строительных параметров.",
              applicationCategory: "ConstructionApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет монолитной плиты",
                "Определение объема бетона",
                "Расчет арматуры",
                "Простое управление параметрами",
              ],
              softwareVersion: "1.0",
              image: "https://boxcalculators.ru/images/slab-foundation-og.jpg",
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
                reviewCount: "112",
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
