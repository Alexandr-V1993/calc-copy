import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до среды",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до среды. Таймер производит обратный отсчет до среды, определит сколько осталось дней, часов, минут, секунд осталось до начала среды.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/until-event-wednesday"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
