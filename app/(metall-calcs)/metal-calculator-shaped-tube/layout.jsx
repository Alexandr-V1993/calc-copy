import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор веса профильной трубы",
  description:
    "Рассчитайте вес 1 метра профильных труб (квадратных и прямоугольных) по ГОСТ. Введите длину, высоту и толщину стенки для точного расчета.",
  keywords: [
    "калькулятор веса профильной трубы",
    "вес квадратной трубы",
    "вес прямоугольной трубы",
    "расчет массы профиля",
    "ГОСТ профильная труба",
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
    title: "Калькулятор веса профильной трубы",
    description:
      "Рассчитайте вес 1 метра профильных труб (квадратных и прямоугольных) по ГОСТ. Введите длину, высоту и толщину стенки для точного расчета.",
    url: "/metal-calculator-shaped-tube",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-shaped-tube-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса профильной трубы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса профильной трубы",
    description:
      "Онлайн инструмент для расчета веса 1 метра профильных труб (квадратных и прямоугольных). Укажите длину, высоту и толщину стенки для точного расчета по ГОСТ.",
    images: ["/images/metal-calculator-shaped-tube-twitter.jpg"],
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
              name: "Калькулятор веса профильной трубы",
              url: "http://calcoffee.ru/metal-calculator-shaped-tube",
              description:
                "Онлайн инструмент для расчета веса 1 метра профильных труб (квадратных и прямоугольных). Укажите длину, высоту и толщину стенки для точного расчета по ГОСТ.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса профильных труб",
                "Поддержка ГОСТ",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/metal-calculator-shaped-tube-og.jpg",
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