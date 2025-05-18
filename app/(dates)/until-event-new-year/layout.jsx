import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней до Нового Года  | Таймер онлайн",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до Нового Года. Таймер производит обратный отсчет до 1 января года, определит сколько осталось дней, часов, минут, секунд.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http:/boxcalculators.ru/until-event-new-year"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
