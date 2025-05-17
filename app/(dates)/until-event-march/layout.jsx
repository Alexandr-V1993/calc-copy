import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до марта",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до марта. Таймер производит обратный отсчет до 1 марта, определит сколько осталось дней, часов, минут, секунд осталось до начала нового мартовского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-march"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
