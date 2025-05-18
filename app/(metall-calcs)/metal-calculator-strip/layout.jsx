import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса стальной ленты | Точный расчет полосового проката",
  description:
    "Мгновенный расчет веса стальной полосы по ГОСТ 103-2006. Введите ширину, толщину и длину ленты для получения точного веса в килограммах.",
  keywords: [
    "калькулятор стальной ленты",
    "вес полосового проката",
    "расчет веса металлической полосы",
    "ГОСТ 103-2006 калькулятор",
    "онлайн расчет стальной ленты",
    "масса металлополосы",
    "металлокалькулятор лента",
    "вес горячекатаной полосы",
    "расчет веса холоднокатаной ленты",
  ],
  alternates: {
    canonical: "/metal-calculator-strip",
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
    title: "Онлайн калькулятор веса стальной ленты",
    description:
      "Точный расчет веса полосового проката по ГОСТ 103-2006. Укажите параметры ленты и получите результат в кг.",
    url: "/metal-calculator-strip",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-strip-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стальной ленты и полосы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор полосового проката",
    description:
      "Рассчитайте вес стальной ленты за секунды. Точные результаты по ГОСТ 103-2006 для металлопроката.",
    images: ["/images/metal-calculator-strip-twitter.jpg"],
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
              name: "Калькулятор веса стальной ленты",
              url: "https://boxcalculators.ru/metal-calculator-strip",
              description:
                "Профессиональный инструмент для расчета веса полосового проката по ГОСТ 103-2006.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет для горячекатаных и холоднокатаных лент",
                "Поддержка ГОСТ 103-2006",
                "Мгновенные результаты",
                "Точные вычисления массы",
                "Учет длины проката",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-strip-og.jpg",
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
