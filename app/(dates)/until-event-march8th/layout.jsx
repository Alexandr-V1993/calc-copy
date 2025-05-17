import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько осталось до 8 марта - Международный Женский День",
  description:
    "Онлайн калькулятор вычисляет сколько дней, часов, минут, секунд осталось до 8 марта, праздник всех девушек. Обратный отсчет до Международного женского дня -  8 марта",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-march8th"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
