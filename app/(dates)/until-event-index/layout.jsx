import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор до события: сколько дней до даты",
  description:
    "Узнайте, сколько дней, часов, минут и секунд осталось до важного события с нашим калькулятором. Идеально подходит для планирования и напоминаний.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="canonical" href="http://calcoffee.ru/until-event-index" />
        <meta
          name="keywords"
          content="калькулятор до события, отсчет времени до даты, сколько дней до события, планирование, напоминания"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Калькулятор до события: сколько дней до даты"
        />
        <meta
          property="og:description"
          content="Узнайте, сколько дней, часов, минут и секунд осталось до важного события с нашим калькулятором. Идеально подходит для планирования и напоминаний."
        />
        <meta
          property="og:url"
          content="http://calcoffee.ru/until-event-index"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
