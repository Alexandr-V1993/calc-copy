import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до ноября",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до ноября. Таймер производит обратный отсчет до 1 ноября, определит сколько осталось дней, часов, минут, секунд осталось до начала ноябрьского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-november"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
