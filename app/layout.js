import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Онлайн-калькуляторы: самые простые и удобные | calcoffee",
  description:
    "Онлайн-калькуляторы по различным тематикам: финансовые, валютные, математические, медицинские, строительные, для IT и даже самогонные. Быстрые и точные расчеты онлайн.",
  keywords:
    "онлайн калькулятор, калькулятор онлайн, финансовый калькулятор, валютный калькулятор, математический калькулятор, строительный калькулятор, медицинский калькулятор, IT калькулятор",
  themeColor: "#ffffff",
  alternates: {
    canonical: "https://calcoffee.ru",
  },
  openGraph: {
    title: "Онлайн-калькуляторы: самые простые и удобные | calcoffee",
    description:
      "Онлайн-калькуляторы по различным тематикам: финансовые, валютные, математические, медицинские, строительные, для IT и даже самогонные. Быстрые и точные расчеты онлайн.",
    url: "https://calcoffee.ru",
    siteName: "calcoffee.ru",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://calcoffee.ru/icon.png",
        width: 512,
        height: 512,
        alt: "Онлайн-калькуляторы | calcoffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн-калькуляторы: самые простые и удобные | calcoffee",
    description:
      "Онлайн-калькуляторы по различным тематикам: финансовые, валютные, математические, медицинские, строительные, для IT и даже самогонные. Быстрые и точные расчеты онлайн.",
    images: ["https://calcoffee.ru/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "zrWuXGrFe1nNpT-Wz1rpNtK7C3IIwpevUkjvVJ7VwRo",
    yandex: "836455e10ae70847",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="calcoffee.ru" />
        <meta name="copyright" content="calcoffee.ru" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="yandex-verification" content="836455e10ae70847" />
        <meta
          name="google-site-verification"
          content="zrWuXGrFe1nNpT-Wz1rpNtK7C3IIwpevUkjvVJ7VwRo"
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
