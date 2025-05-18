import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса стального квадрата | ГОСТ 2591-2006 | Точный расчет",
  description:
    "Мгновенный расчет веса стального квадратного проката по ГОСТ 2591-2006. Введите размер стороны квадрата и длину для получения точного веса в кг.",
  keywords: [
    "калькулятор квадрата",
    "вес стального квадрата",
    "расчет веса квадратного проката",
    "ГОСТ 2591 калькулятор",
    "онлайн расчет металлоквадрата",
    "масса квадратного профиля",
    "металлокалькулятор квадрат",
  ],
  alternates: {
    canonical: "/metal-calculator-square",
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
    title: "Онлайн калькулятор веса стального квадрата",
    description:
      "Точный расчет веса квадратного проката по ГОСТ 2591-2006. Укажите размер стороны и длину для мгновенного результата.",
    url: "/metal-calculator-square",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-square-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стального квадрата",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор квадратного проката",
    description:
      "Рассчитайте вес стального квадрата за секунды. Точные результаты по ГОСТ 2591-2006 для металлопроката.",
    images: ["/images/metal-calculator-square-twitter.jpg"],
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
              name: "Калькулятор веса стального квадрата",
              url: "https://boxcalculators.ru/metal-calculator-square",
              description:
                "Профессиональный инструмент для расчета веса квадратного проката по ГОСТ 2591-2006.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет для квадратного проката",
                "Поддержка ГОСТ 2591-2006",
                "Мгновенные результаты",
                "Точные вычисления массы",
                "Учет длины профиля",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-square-og.jpg",
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
