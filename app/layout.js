import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "BoxCalculators — онлайн-калькуляторы для любых расчётов",
  description:
    "Бесплатные онлайн-калькуляторы: финансовые, строительные, медицинские, IT и другие. Точные расчёты в один клик!",
  keywords:
    "онлайн калькулятор, калькулятор кредита, строительный калькулятор, ИМТ калькулятор, IT калькуляторы, конвертер единиц, boxcalculators",
  themeColor: "#ffffff",
  alternates: {
    canonical: "https://boxcalculators.ru",
  },
  openGraph: {
    title: "BoxCalculators — онлайн-калькуляторы для любых расчётов",
    description:
      "Бесплатные онлайн-калькуляторы: финансовые, строительные, медицинские, IT и другие. Точные расчёты в один клик!",
    url: "https://boxcalculators.ru",
    siteName: "boxcalculators.ru",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://boxcalculators.ru/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "BoxCalculators — онлайн-калькуляторы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxCalculators — онлайн-калькуляторы для любых расчётов",
    description:
      "Бесплатные онлайн-калькуляторы: финансовые, строительные, медицинские, IT и другие. Точные расчёты в один клик!",
    images: ["https://boxcalculators.ru/icon-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      // Используем имеющуюся иконку 192x192 для apple-touch-icon
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "ваш_google_verification_code",
    yandex: "ваш_yandex_verification_code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="boxcalculators.ru" />
        <meta name="copyright" content="boxcalculators.ru" />
        <meta name="theme-color" content="#ffffff" />
        {/* Замените на свои коды верификации */}
        <meta
          name="yandex-verification"
          content="ваш_yandex_verification_code"
        />
        <meta
          name="google-site-verification"
          content="ваш_google_verification_code"
        />

        {/* Дополнительные link-теги для иконок */}
        <link rel="shortcut icon" href="/icon-32x32.png" />
        {/* Используем имеющуюся иконку 192x192 для apple-touch-icon с версией для кеша */}
        <link
          rel="apple-touch-icon"
          href="/icon-192x192.png?v=2"
          sizes="192x192"
        />
        {/* Предзагрузка основных иконок */}
        <link rel="preload" href="/icon-192x192.png" as="image" />
        <link rel="preload" href="/icon-512x512.png" as="image" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
