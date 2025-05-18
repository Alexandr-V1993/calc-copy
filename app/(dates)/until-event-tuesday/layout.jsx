import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до вторника",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до вторника. Таймер производит обратный отсчет до вторника, определит сколько осталось дней, часов, минут, секунд осталось до начала вторника.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-tuesday"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
