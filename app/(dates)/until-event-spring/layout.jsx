import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до весны",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до весны. Таймер производит обратный отсчет до 1 марта, определит сколько осталось дней, часов, минут, секунд осталось до начала весны.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-spring"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
