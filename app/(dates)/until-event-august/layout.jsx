import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до августа",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до августа. Таймер производит обратный отсчет до 1 августа, определит сколько осталось дней, часов, минут, секунд осталось до последнего месяца лета.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-august"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
