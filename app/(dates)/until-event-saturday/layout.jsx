import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до субботы",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до субботы. Таймер производит обратный отсчет до субботы, определит сколько осталось дней, часов, минут, секунд осталось до начала субботы.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-saturday"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
