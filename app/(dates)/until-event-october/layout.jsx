import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до октября",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до октября. Таймер производит обратный отсчет до 1 октября, определит сколько осталось дней, часов, минут, секунд осталось до начала октябрьского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-october"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
