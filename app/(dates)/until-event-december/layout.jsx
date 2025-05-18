import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до декабря",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до декабря. Таймер производит обратный отсчет до 1 декабря, определит сколько осталось дней, часов, минут, секунд осталось до начала декабрьского месяца.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-december"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
