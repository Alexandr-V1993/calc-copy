import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса швеллера",
  description:
    "Рассчитайте вес швеллеров (неравнополочных и равнополочных) с помощью нашего калькулятора. Узнайте размеры и соответствие ГОСТ 8240-97 для различных типов швеллеров.",
  keywords: [
    "калькулятор веса швеллера",
    "расчет веса швеллеров",
    "ГОСТ 8240-97",
    "размеры швеллеров",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-channel",
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
    title: "Калькулятор веса швеллера",
    description:
      "Рассчитайте вес швеллеров (неравнополочных и равнополочных) с помощью нашего калькулятора. Узнайте размеры и соответствие ГОСТ 8240-97 для различных типов швеллеров.",
    url: "/metal-calculator-channel",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-channel-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса швеллера",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса швеллера",
    description:
      "Онлайн инструмент для расчета веса швеллеров (неравнополочных и равнополочных). Проверьте размеры и соответствие ГОСТ 8240-97.",
    images: ["/images/metal-calculator-channel-twitter.jpg"],
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
              name: "Калькулятор веса швеллера",
              url: "http://calcoffee.ru/metal-calculator-channel",
              description:
                "Онлайн инструмент для расчета веса швеллеров (неравнополочных и равнополочных). Проверьте размеры и соответствие ГОСТ 8240-97.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса швеллеров",
                "Поддержка ГОСТ 8240-97",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-channel-og.jpg",
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