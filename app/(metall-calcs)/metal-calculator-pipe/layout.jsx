import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса трубы по ГОСТ 10704-91",
  description:
    "Рассчитайте вес трубы по ГОСТ 10704-91, используя наш калькулятор. Введите диаметр и толщину стенки для точного расчета веса.",
  keywords: [
    "калькулятор веса трубы",
    "расчет веса труб",
    "ГОСТ 10704-91",
    "вес стальных труб",
    "онлайн калькулятор труб",
  ],
  alternates: {
    canonical: "/metal-calculator-pipe",
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
    title: "Калькулятор веса трубы по ГОСТ 10704-91",
    description:
      "Точный расчет веса стальных труб по ГОСТ 10704-91. Введите наружный диаметр и толщину стенки для получения результата.",
    url: "/metal-calculator-pipe",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-pipe-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса труб по ГОСТу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса труб",
    description:
      "Онлайн расчет веса стальных труб по ГОСТ 10704-91. Просто введите параметры трубы.",
    images: ["/images/metal-calculator-pipe-twitter.jpg"],
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

        {/* Структурированные данные Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор веса труб",
              url: "https://boxcalculators.ru/metal-calculator-pipe",
              description:
                "Профессиональный расчет веса стальных труб по ГОСТ 10704-91. Точные результаты для любых параметров труб.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет по ГОСТ 10704-91",
                "Учет диаметра и толщины стенки",
                "Мгновенные результаты",
                "Простое управление",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-pipe-og.jpg",
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
