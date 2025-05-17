import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса стальной ленты",
  description:
    "Рассчитайте вес стальной ленты по ГОСТ или другим стандартам. Введите размеры полосы для получения точного веса.",
  keywords: [
    "калькулятор веса стальной ленты",
    "вес стальной полосы",
    "ГОСТ стальная лента",
    "расчет веса полосы",
    "онлайн калькулятор",
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
    title: "Калькулятор веса стальной ленты",
    description:
      "Рассчитайте вес стальной ленты по ГОСТ или другим стандартам. Введите размеры полосы для получения точного веса.",
    url: "/metal-calculator-strip",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-strip-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стальной ленты",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса стальной ленты",
    description:
      "Онлайн инструмент для расчета веса стальной ленты. Поддержка ГОСТ и других стандартов.",
    images: ["/images/metal-calculator-strip-twitter.jpg"],
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
              name: "Калькулятор веса стальной ленты",
              url: "http://calcoffee.ru/metal-calculator-strip",
              description:
                "Онлайн инструмент для расчета веса стальной ленты по ГОСТ или другим стандартам. Введите размеры полосы для получения точного веса.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса стальной ленты",
                "Поддержка ГОСТ",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-strip-og.jpg",
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