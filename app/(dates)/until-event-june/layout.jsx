import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до июня",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до июня. Таймер производит обратный отсчет до 1 июня, определит сколько осталось дней, часов, минут, секунд осталось до начала нового июньского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-june"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
