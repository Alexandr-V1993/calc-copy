import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса стального круга",
  description:
    "Рассчитайте вес стального круга по его диаметру с помощью нашего калькулятора. Введите диаметр, чтобы получить теоретический вес изделия.",
  keywords: [
    "калькулятор веса стального круга",
    "расчет веса круга",
    "вес металлического изделия",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-circle",
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
    title: "Калькулятор веса стального круга",
    description:
      "Рассчитайте вес стального круга по его диаметру с помощью нашего калькулятора. Введите диаметр, чтобы получить теоретический вес изделия.",
    url: "/metal-calculator-circle",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-circle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стального круга",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса стального круга",
    description:
      "Онлайн инструмент для расчета веса стального круга по его диаметру. Получите теоретический вес изделия.",
    images: ["/images/metal-calculator-circle-twitter.jpg"],
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
              name: "Калькулятор веса стального круга",
              url: "https://boxcalculators.ru/metal-calculator-circle",
              description:
                "Онлайн инструмент для расчета веса стального круга по его диаметру. Получите теоретический вес изделия.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса стального круга",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-circle-og.jpg",
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
