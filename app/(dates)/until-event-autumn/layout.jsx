import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до осени",
  description:
    "Онлайн калькулятор вычисляет сколько дней осталось до осени. Таймер производит обратный отсчет до 1 сентября, определит сколько осталось дней, часов, минут, секунд осталось до начала осени.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-autumn"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
