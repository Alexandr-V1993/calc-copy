import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Металлокалькулятор: расчет веса металла онлайн",
  description:
    "Рассчитайте вес изделий металлопроката по ГОСТ, используя наш онлайн калькулятор. Введите параметры и получите точный расчет.",
  keywords: [
    "металлокалькулятор",
    "расчет веса металла",
    "ГОСТ",
    "калькулятор металлопроката",
    "онлайн калькулятор веса",
  ],
  alternates: {
    canonical: "/metallocalculator",
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
    title: "Металлокалькулятор: расчет веса металла онлайн",
    description:
      "Рассчитайте вес изделий металлопроката по ГОСТ, используя наш онлайн калькулятор. Введите параметры и получите точный расчет.",
    url: "/metallocalculator",
    type: "website",
    images: [
      {
        url: "/images/metallocalculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Металлокалькулятор: расчет веса металла онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Металлокалькулятор: расчет веса металла онлайн",
    description:
      "Онлайн инструмент для расчета веса изделий металлопроката по ГОСТ. Введите параметры для точного расчета.",
    images: ["/images/metallocalculator-twitter.jpg"],
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
              name: "Металлокалькулятор: расчет веса металла онлайн",
              url: "http://calcoffee.ru/metallocalculator",
              description:
                "Онлайн инструмент для расчета веса изделий металлопроката по ГОСТ. Введите параметры для точного расчета.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса металлопроката",
                "Поддержка ГОСТ",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metallocalculator-og.jpg",
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