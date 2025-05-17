import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://calcoffee.ru"),
  title: "Калькулятор возраста кошки | Перевод кошачьих лет в человеческие",
  description:
    "Узнайте реальный возраст вашей кошки в пересчете на человеческие годы. Наш калькулятор учитывает все этапы жизни питомца для точного расчета.",
  keywords: [
    "калькулятор возраста кошки",
    "возраст кошки в человеческих годах",
    "как посчитать возраст кота",
    "таблица возраста кошек",
    "сравнение возраста кошки и человека",
    "определение возраста кота",
  ],
  alternates: {
    canonical: "/cat-age-calculator",
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
    title: "Калькулятор возраста кошки - Перевод кошачьих лет в человеческие",
    description:
      "Точный расчет возраста вашей кошки в человеческих годах. Узнайте, сколько лет вашему питомцу по человеческим меркам!",
    url: "/cat-age-calculator",
    type: "website",
    images: [
      {
        url: "/images/cat-age-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор возраста кошки - Узнайте возраст вашего питомца",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор возраста кошки - Перевод кошачьих лет в человеческие",
    description:
      "Рассчитайте, сколько лет вашей кошке по человеческим меркам. Простой и точный расчет возраста питомца!",
    images: ["/images/cat-age-calculator-twitter.jpg"],
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

        {/* Структурированные данные для калькулятора возраста кошки */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор возраста кошки",
              url: "http://calcoffee.ru/cat-age-calculator",
              description:
                "Онлайн инструмент для перевода кошачьего возраста в человеческие годы с учетом всех этапов жизни животного.",
              applicationCategory: "PetApplication",
              operatingSystem: "Web",
              featureList: [
                "Точный расчет возраста кошки",
                "Перевод кошачьих лет в человеческие",
                "Учет разных этапов жизни питомца",
                "Простая и удобная форма расчета",
                "Наглядные результаты",
              ],
              softwareVersion: "1.0",
              image: "http://calcoffee.ru/images/cat-age-calculator-og.jpg",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "215",
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
