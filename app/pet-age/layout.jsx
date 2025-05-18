import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор возраста кошки | Перевод в человеческие годы",
  description:
    "Узнайте, сколько лет вашей кошке по человеческим меркам. Точный расчет с учетом всех этапов жизни питомца.",
  keywords: [
    "калькулятор возраста кошки",
    "возраст кошки в человеческих годах",
    "как определить возраст кота",
    "таблица возраста кошек",
    "сравнение возраста кошки и человека",
    "перевод кошачьего возраста",
  ],
  alternates: {
    canonical: "/pet-age",
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
    title: "Калькулятор возраста кошки онлайн | BoxCalculators",
    description:
      "Онлайн инструмент для перевода возраста вашего питомца в человеческие годы. Простой и удобный интерфейс для владельцев кошек.",
    url: "/pet-age",
    type: "website",
    images: [
      {
        url: "/images/cat-age-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор возраста кошки онлайн | BoxCalculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор возраста кошки онлайн | BoxCalculators",
    description:
      "Рассчитайте возраст вашей кошки по человеческим годам за секунды. Подходит для понимания физического состояния и ухода за животным.",
    images: ["/images/cat-age-calculator-twitter.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="BoxCalculators" />
        <meta name="author" content="BoxCalculators" />
        <meta name="copyright" content="© 2025 BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebApplication",
              name: "Калькулятор возраста кошки",
              url: "https://boxcalculators.ru/pet-age ",
              description:
                "Инструмент для перевода кошачьего возраста в человеческие годы. Учитывает все основные этапы жизни животного.",
              applicationCategory: "PetApplication",
              operatingSystem: "Web",
              featureList: [
                "Перевод кошачьих лет в человеческие",
                "Учет фаз развития кошки",
                "Мгновенный результат",
                "Простой интерфейс",
                "Полезная информация о возрасте питомца",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/cat-age-calculator-og.jpg ",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock ",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru ",
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
