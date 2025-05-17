import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до февраля",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до февраля. Таймер производит обратный отсчет до 1 февраля, определит сколько осталось дней, часов, минут, секунд осталось до начала нового февральского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-february"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
