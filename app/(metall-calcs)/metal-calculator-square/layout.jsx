import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса стальных квадратов",
  description:
    "Рассчитайте вес стальных квадратов по ГОСТ 2591. Введите размеры квадрата для получения точного веса.",
  keywords: [
    "калькулятор веса стальных квадратов",
    "ГОСТ 2591",
    "расчет веса квадрата",
    "вес квадратных профилей",
    "онлайн калькулятор",
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
    title: "Калькулятор веса стальных квадратов",
    description:
      "Рассчитайте вес стальных квадратов по ГОСТ 2591. Введите размеры квадрата для получения точного веса.",
    url: "/metal-calculator-square",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-square-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса стальных квадратов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса стальных квадратов",
    description:
      "Онлайн инструмент для расчета веса стальных квадратов по ГОСТ 2591. Введите размеры для точного результата.",
    images: ["/images/metal-calculator-square-twitter.jpg"],
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
              name: "Калькулятор веса стальных квадратов",
              url: "http://calcoffee.ru/metal-calculator-square",
              description:
                "Онлайн инструмент для расчета веса стальных квадратов по ГОСТ 2591. Введите размеры квадрата для получения точного веса.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса стальных квадратов",
                "Поддержка ГОСТ 2591",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-square-og.jpg",
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