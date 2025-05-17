import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса листового металла",
  description:
    "Рассчитайте вес стального листа по ГОСТ 19903 с помощью нашего калькулятора. Введите размеры листа для получения точного веса.",
  keywords: [
    "калькулятор веса листового металла",
    "вес стального листа",
    "ГОСТ 19903",
    "расчет веса листа",
    "онлайн калькулятор",
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
    title: "Калькулятор веса листового металла",
    description:
      "Рассчитайте вес стального листа по ГОСТ 19903 с помощью нашего калькулятора. Введите размеры листа для получения точного веса.",
    url: "/metal-calculator-sheet",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-sheet-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса листового металла",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса листового металла",
    description:
      "Онлайн инструмент для расчета веса стального листа по ГОСТ 19903. Введите размеры листа для получения точного веса.",
    images: ["/images/metal-calculator-sheet-twitter.jpg"],
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
              name: "Калькулятор веса листового металла",
              url: "http://calcoffee.ru/metal-calculator-sheet",
              description:
                "Онлайн инструмент для расчета веса стального листа по ГОСТ 19903. Введите размеры листа для получения точного веса.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса листового металла",
                "Поддержка ГОСТ 19903",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-sheet-og.jpg",
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