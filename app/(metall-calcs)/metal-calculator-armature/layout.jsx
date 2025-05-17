import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса арматуры",
  description:
    "Рассчитайте вес арматуры различных диаметров и длин с помощью нашего калькулятора. Получите точные результаты в соответствии с ГОСТ.",
  keywords: [
    "калькулятор веса арматуры",
    "расчет веса арматуры",
    "вес арматурных стержней",
    "ГОСТ арматура",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-armature",
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
    title: "Калькулятор веса арматуры",
    description:
      "Рассчитайте вес арматуры различных диаметров и длин с помощью нашего калькулятора. Получите точные результаты в соответствии с ГОСТ.",
    url: "/metal-calculator-armature",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-armature-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса арматуры",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса арматуры",
    description:
      "Онлайн инструмент для расчета веса арматуры различных диаметров и длин. Результаты соответствуют ГОСТ.",
    images: ["/images/metal-calculator-armature-twitter.jpg"],
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
              name: "Калькулятор веса арматуры",
              url: "http://calcoffee.ru/metal-calculator-armature",
              description:
                "Онлайн инструмент для расчета веса арматуры различных диаметров и длин. Результаты соответствуют ГОСТ.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса арматуры",
                "Поддержка ГОСТ",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-armature-og.jpg",
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