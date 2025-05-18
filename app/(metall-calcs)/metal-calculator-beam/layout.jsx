import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса двутавровых балок",
  description:
    "Вычислите вес двутавровых балок с помощью калькулятора и таблиц ГОСТ. Укажите типоразмер и длину для точного расчета.",
  keywords: [
    "калькулятор веса балок",
    "двутавровая балка",
    "расчет веса",
    "таблицы ГОСТ",
    "типоразмеры балок",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-beam",
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
    title: "Калькулятор веса двутавровых балок",
    description:
      "Вычислите вес двутавровых балок с помощью калькулятора и таблиц ГОСТ. Укажите типоразмер и длину для точного расчета.",
    url: "/metal-calculator-beam",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-beam-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса двутавровых балок",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса двутавровых балок",
    description:
      "Онлайн инструмент для расчета веса двутавровых балок по ГОСТ. Укажите типоразмер и длину для точного расчета.",
    images: ["/images/metal-calculator-beam-twitter.jpg"],
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
              name: "Калькулятор веса двутавровых балок",
              url: "https://boxcalculators.ru/metal-calculator-beam",
              description:
                "Онлайн инструмент для расчета веса двутавровых балок по ГОСТ. Укажите типоразмер и длину для получения точных результатов.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса двутавровых балок",
                "Поддержка таблиц ГОСТ",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-beam-og.jpg",
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
            }),
          }}
          suppressHydrationWarning
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
