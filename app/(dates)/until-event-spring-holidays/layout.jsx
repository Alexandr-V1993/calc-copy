import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до весенних каникул",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до весенних каникул. Таймер производит обратный отсчет до 25 марта, определит сколько осталось дней, часов, минут, секунд осталось до начала весеннего отдыха.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/until-event-spring-holidays"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
