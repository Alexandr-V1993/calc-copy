import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса металлических уголков",
  description:
    "Рассчитайте массу погонного метра металлических уголков (равнополочных и неравнополочных) с помощью нашего калькулятора. Также доступны таблицы весов и размеров популярных сортаментов.",
  keywords: [
    "калькулятор веса уголков",
    "расчет массы уголков",
    "таблицы веса",
    "размеры уголков",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-angle",
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
    title: "Калькулятор веса металлических уголков",
    description:
      "Рассчитайте массу погонного метра металлических уголков (равнополочных и неравнополочных) с помощью нашего калькулятора. Также доступны таблицы весов и размеров популярных сортаментов.",
    url: "/metal-calculator-angle",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-angle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса металлических уголков",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса металлических уголков",
    description:
      "Онлайн инструмент для расчета массы погонного метра металлических уголков (равнополочных и неравнополочных). Доступны таблицы весов и размеров.",
    images: ["/images/metal-calculator-angle-twitter.jpg"],
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
              name: "Калькулятор веса металлических уголков",
              url: "http://calcoffee.ru/metal-calculator-angle",
              description:
                "Онлайн инструмент для расчета массы погонного метра металлических уголков (равнополочных и неравнополочных). Также доступны таблицы весов и размеров популярных сортаментов.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет массы уголков",
                "Таблицы весов и размеров",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-angle-og.jpg",
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