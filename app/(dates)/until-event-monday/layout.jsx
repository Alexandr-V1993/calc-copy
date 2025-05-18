import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до понедельника",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до понедельника. Таймер производит обратный отсчет до понедельника, определит сколько осталось дней, часов, минут, секунд осталось до начала недели.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-monday"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
