import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до конца года",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до конца года. Таймер производит обратный отсчет до 31 декабря, определит сколько осталось дней, часов, минут, секунд.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-year-end"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
