import { Montserrat } from "next/font/google";

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://boxcalculators.ru"),
  title: "Калькулятор веса шестигранника",
  description:
    "Рассчитайте вес шестигранников из стали с помощью нашего калькулятора. Узнайте вес и прокат по ГОСТ 2879.",
  keywords: [
    "калькулятор веса шестигранника",
    "расчет веса",
    "ГОСТ 2879",
    "прокат шестигранников",
    "онлайн калькулятор",
  ],
  alternates: {
    canonical: "/metal-calculator-hex",
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
    title: "Калькулятор веса шестигранника",
    description:
      "Рассчитайте вес шестигранников из стали с помощью нашего калькулятора. Узнайте вес и прокат по ГОСТ 2879.",
    url: "/metal-calculator-hex",
    type: "website",
    images: [
      {
        url: "/images/metal-calculator-hex-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор веса шестигранника",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор веса шестигранника",
    description:
      "Онлайн инструмент для расчета веса шестигранников из стали. Проверьте вес и соответствие ГОСТ 2879.",
    images: ["/images/metal-calculator-hex-twitter.jpg"],
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
        <meta name="copyright" content="BoxCalculators" />
        <meta name="rating" content="general" />

        {/* Добавление структурированных данных Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Калькулятор веса шестигранника",
              url: "https://boxcalculators.ru/metal-calculator-hex",
              description:
                "Онлайн инструмент для расчета веса шестигранников из стали. Проверьте вес и соответствие ГОСТ 2879.",
              applicationCategory: "EngineeringApplication",
              operatingSystem: "Web",
              featureList: [
                "Расчет веса шестигранников",
                "Поддержка ГОСТ 2879",
                "Онлайн-расчет",
                "Простой интерфейс",
              ],
              softwareVersion: "1.0",
              image:
                "https://boxcalculators.ru/images/metal-calculator-hex-og.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "BoxCalculators",
                  url: "https://boxcalculators.ru",
                },
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
