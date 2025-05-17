import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до четверга",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до четверга. Таймер производит обратный отсчет до четверга, определит сколько осталось дней, часов, минут, секунд осталось до начала четверга.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-thursday"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
