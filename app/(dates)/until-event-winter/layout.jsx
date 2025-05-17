import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до зимы",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до зимы. Таймер производит обратный отсчет до 1 декабря, определит сколько осталось дней, часов, минут, секунд осталось до начала зимы.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-winter"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
