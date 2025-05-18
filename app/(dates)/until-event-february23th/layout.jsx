import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько осталось до 23 февраля - День защитника Отечества",
  description:
    "Онлайн калькулятор вычисляет сколько дней, часов, минут, секунд осталось до 23 февраля, День защитника Отечества. Обратный отсчет до Международного мужского дня - 23 февраля",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-february23th"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
