import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько осталось до 14 февраля - День Святого Валентина",
  description:
    "Онлайн калькулятор вычисляет сколько дней, часов, минут, секунд осталось до 14 февраля, День Святого Валентина. Обратный отсчет до дня влюбленных - 14 февраля",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/until-event-february14th"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
