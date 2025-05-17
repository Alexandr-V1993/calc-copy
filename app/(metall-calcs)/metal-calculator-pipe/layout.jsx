import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса трубы по ГОСТ 10704-91",
  description:
    "Рассчитайте вес трубы по ГОСТ 10704-91, используя наш калькулятор. Введите диаметр и толщину трубы для точного расчета веса.",
  keywords: [
    "калькулятор веса трубы",
    "ГОСТ 10704-91",
    "расчет веса трубы",
    "диаметр и толщина трубы",
    "онлайн калькулятор",
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
      "Рассчитайте вес трубы по ГОСТ 10704-91, используя наш калькулятор. Введите диаметр и толщину трубы для точного расчета веса.",
    url: "/metal-calculator-pipe",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-pipe-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса трубы по ГОСТ 10704-91",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса трубы по ГОСТ 10704-91",
    description:
      "Онлайн инструмент для расчета веса трубы по ГОСТ 10704-91. Введите диаметр и толщину трубы для точного расчета.",
    images: ["/images/metal-calculator-pipe-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="CalCoffee" />
        <meta name="author" content="CalCoffee" />
        <meta name="copyright" content="CalCoffee" />
        <meta name="rating" content="general" />

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор веса трубы по ГОСТ 10704-91",
              url: "http://calcoffee.ru/metal-calculator-pipe",
              description:
                "Онлайн инструмент для расчета веса трубы по ГОСТ 10704-91. Введите диаметр и толщину трубы для точного расчета.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса трубы",
                "Поддержка ГОСТ 10704-91",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-pipe-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "CalCoffee",
                  url: "http://calcoffee.ru",
                },
              },
            }),
          }}
          suppressHydrationWarning // Подавление предупреждений о гидратации
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}