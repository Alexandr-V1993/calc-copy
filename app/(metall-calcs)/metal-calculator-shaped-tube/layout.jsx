import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса профильной трубы | Точный расчет по ГОСТ",
  description:
    "Онлайн расчет веса квадратных и прямоугольных профильных труб. Укажите размеры и толщину стенки для мгновенного получения точного результата по ГОСТ.",
  keywords: [
    "калькулятор профильной трубы",
    "вес квадратной трубы",
    "расчет прямоугольной трубы",
    "масса профиля онлайн",
    "ГОСТ 8645-68",
    "ГОСТ 8639-82",
    "металлокалькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-shaped-tube",
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
    title: "Калькулятор веса профильных труб квадратных и прямоугольных",
    description:
      "Точный расчет веса 1 погонного метра профильных труб по ГОСТ. Введите параметры и получите результат мгновенно.",
    url: "/metal-calculator-shaped-tube",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-shaped-tube-og.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн калькулятор веса профильных труб",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор профильных труб",
    description:
      "Рассчитайте вес квадратных и прямоугольных труб за секунды. Точные результаты по ГОСТ для строительства и металлоконструкций.",
    images: ["/images/metal-calculator-shaped-tube-twitter.jpg"],
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
              name: "Калькулятор профильных труб",
              url: "https://boxcalculators.ru/metal-calculator-shaped-tube",
              description:
                "Профессиональный инструмент для расчета веса квадратных и прямоугольных профильных труб по ГОСТ.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет для квадратных и прямоугольных труб",
                "Поддержка ГОСТ 8645-68 и 8639-82",
                "Мгновенные результаты",
                "Точные вычисления",
                "Удобный интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-shaped-tube-og.jpg",
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
