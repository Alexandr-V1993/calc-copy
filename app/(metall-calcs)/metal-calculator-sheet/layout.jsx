import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса листового металла | Точный расчет по ГОСТ 19903",
  description:
    "Мгновенный расчет веса стального листа по ГОСТ 19903. Введите длину, ширину и толщину листа для получения точного результата в килограммах.",
  keywords: [
    "калькулятор листового металла",
    "расчет веса стального листа",
    "вес металлопроката",
    "ГОСТ 19903 калькулятор",
    "онлайн расчет металлического листа",
    "масса стального листа",
    "металлокалькулятор онлайн",
  ],
  alternates: {
    canonical: "/metal-calculator-sheet",
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
    title: "Онлайн калькулятор веса листового металла",
    description:
      "Точный расчет веса стальных листов по ГОСТ 19903. Укажите параметры листа и получите результат в кг.",
    url: "/metal-calculator-sheet",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-sheet-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стального листа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор листового металла",
    description:
      "Рассчитайте вес стального листа за секунды. Точные результаты по ГОСТ 19903 для металлопроката.",
    images: ["/images/metal-calculator-sheet-twitter.jpg"],
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
              name: "Калькулятор веса листового металла",
              url: "https://boxcalculators.ru/metal-calculator-sheet",
              description:
                "Профессиональный инструмент для расчета веса стальных листов по ГОСТ 19903.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет для стальных листов",
                "Поддержка ГОСТ 19903",
                "Мгновенные результаты",
                "Точные вычисления",
                "Удобный ввод параметров",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-sheet-og.jpg",
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
