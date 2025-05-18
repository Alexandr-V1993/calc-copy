import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до воскресенья",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до воскресенья. Таймер производит обратный отсчет до воскресенья, определит сколько осталось дней, часов, минут, секунд осталось до начала воскресенья.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-sunday"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
